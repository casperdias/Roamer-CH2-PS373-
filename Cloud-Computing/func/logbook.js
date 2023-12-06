// Create a new log
const connection = require('../conn/db'); 
async function createLog(log) {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO logbook (place_id, visited_time, text, user_id) VALUES (?, ?, ?, ?)', [log.place_id, log.visited_time, log.text, log.user_id], (err, results) => {
            if (err) {
                console.error('Error executing MySQL query:', err);
                reject(err);
            } else {
                // console.log(results);
                resolve(results);
            }
        });
    });
}

// Get all logs
async function getLogs() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM logbook', (err, results) => {
            if (err) {
                console.error('Error executing MySQL query:', err);
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}
// Get a specific log
async function getLog(log_id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM logbook WHERE log_id = ?', [log_id], (err, results) => {
            if (err) {
                console.error('Error executing MySQL query:', err);
                reject(err);
            } else {
                resolve(results);
            }
        }); 
    });
}

// Update a specific log
async function updateLog(log_id, updatedLog) {
    try {
        const query = 'UPDATE logbook SET place_id = ?, visited_time = ?, text = ?, user_id = ?, created_at = ? WHERE log_id = ?';
        await connection.query(query, [updatedLog.place_id, updatedLog.visited_time, updatedLog.text, updatedLog.user_id, updatedLog.created_at, log_id]);
    } catch (error) {
        console.error('Error updating log:', error);
        throw error;
    }
}

// Delete a specific log
async function deleteLog(log_id) {
    try {
        const query = 'DELETE FROM logbook WHERE log_id = ?';
        await connection.query(query, [log_id]);
    } catch (error) {
        console.error('Error deleting log:', error);
        throw error;
    }
}
module.exports = { createLog, getLogs, getLog, updateLog, deleteLog };