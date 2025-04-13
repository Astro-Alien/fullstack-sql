const express = require('express');
const cors = require('cors');
const pool = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

// Get all tasks
app.get('/tasks', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tasks ORDER BY id DESC');
        res.json(result.rows);
    }
    catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: error.message });
    }
});

// Post create task
app.post('/tasks', async (req, res) => {
    const {title, description} = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *',
            [title, description]
        );
        res.json(result.rows[0]);
    }
    catch(error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: error.message });
    }
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});