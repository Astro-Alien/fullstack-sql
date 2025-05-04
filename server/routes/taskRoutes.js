const express =  require('express');
const authenticateToken = require('../middleware/auth');
const pool = require('../database');

const router = express.Router();

//create task
router.post('/createTask', authenticateToken, async (req, res) => {
    const { id, title, description } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO tasks (id, title, description, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [id, title, description, req.user.userId]
        );

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: error.message });
    }
});

// Get all tasks
router.get('/fetchTasks', authenticateToken, async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tasks WHERE user_id = $1', [req.user.userId]);
        res.json(result.rows);
    }
    catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: error.message });
    }
});

//fetch specific task
router.get('/fetchTask/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM tasks WHERE id = $1 AND user_id = $2', [id, req.user.userId]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching task:', error);
        res.status(500).json({ error: error.message });
    }
});

// Update multiple tasks
router.put('/updateTasks', authenticateToken, async (req, res) => {
    const { tasks } = req.body;
    try {
        const updatePromises = tasks.map(task => {
            return pool.query(
                'UPDATE tasks SET title = $1, description = $2, completed = $3 WHERE id = $4 AND user_id = $5 RETURNING *',
                [task.title, task.description, task.completed, task.id, req.user.userId]
            );
        });
        const results = await Promise.all(updatePromises);
        res.json(results.map(result => result.rows[0]));
    } catch (error) {
        console.error('Error updating tasks:', error);
        res.status(500).json({ error: error.message });
    }
});

// Update task
router.put('/updateTasks/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    try {
        const result = await pool.query(
            'UPDATE tasks SET title = $1, description = $2, completed = $3 WHERE id = $4 AND user_id = $5 RETURNING *',
            [title, description, completed, id, req.user.userId]
        );
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ error: error.message });
    }
});

//Update specific field of task
router.patch('/updateTask/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    try {
        const result = await pool.query(
            'UPDATE tasks SET title = COALESCE($1, title), description = COALESCE($2, description), completed = COALESCE($3, completed) WHERE id = $4 AND user_id = $5 RETURNING *',
            [title, description, completed, id, req.user.userId]
        );
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ error: error.message });
    }
});

//Delete task
router.delete('/deleteTask/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM tasks WHERE id = $1 AND user_id = $2 RETURNING *', [id, req.user.userId]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;