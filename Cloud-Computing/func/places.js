const connection = require('../conn/db'); 

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

module.exports = { getallPlaces, getPlace };