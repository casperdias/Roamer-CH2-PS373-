const connection = require('../conn/db');
const processFile = require("../middleware/storage");
require("dotenv").config();
const {
    format
} = require("util");
const {
    Storage
} = require("@google-cloud/storage");

// Instantiate a storage client with credentials
const storage = new Storage({
    keyFilename: process.env.GCLOUD_SERVICE_KEY
});
const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);

const upload = async (req, res) => {
    try {
        await processFile(req, res);

        if (!req.file) {
            return res.status(400).send({
                message: "Please upload a file!"
            });
        }

        // Create a new blob in the bucket and upload the file data.
        const blob = bucket.file(req.file.originalname);
        const blobStream = blob.createWriteStream({
            resumable: false,
        });

        blobStream.on("error", (err) => {
            res.status(500).send({
                message: err.message
            });
        });

        blobStream.on("finish", async (data) => {
            // Create URL for directly file access via HTTP.
            const publicUrl = format(
                `https://storage.googleapis.com/${bucket.name}/${blob.name}`
            );

            req.body.imageUrl = publicUrl;

            const {
                name,
                city,
                description,
                price_range,
                rating,
                imageUrl
            } = req.body;

            const query = 'INSERT INTO place (name, city, description, price_range, rating, img_link) VALUES (?, ?, ?, ?, ?, ?)';
            connection.query(query, [name, city, description, price_range, rating, imageUrl], (err, results) => {
                if (err) {
                    console.error('Error executing MySQL query:', err);
                    return res.status(500).json({
                        error: 'Internal Server Error'
                    });
                } else {
                    return res.status(201).json({
                        message: 'Place created successfully',
                        placeId: results.insertId,
                        status_storage: `Uploaded the file successfully: ${req.file.originalname}`,
                        url: publicUrl
                    });
                }
            });
        });

        blobStream.end(req.file.buffer);
    } catch (err) {
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
    }
};

// Get All Places from MySQL and return as JSON
function getallPlaces(req, res) {
    connection.query('SELECT * FROM place', (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({
                error: 'Internal Server Error'
            });
        } else {
            res.json(results);
        }
    });
}

// Get a specific place and return as JSON
function getPlace(req, res) {
    const id = req.params.id;
    connection.query('SELECT * FROM place WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({
                error: 'Internal Server Error'
            });
        } else if (results.length === 0) {
            res.status(404).json({
                error: 'Place not found'
            });
        } else {
            res.json(results[0]);
        }
    });
}

module.exports = {
    getallPlaces,
    getPlace,
    upload
};