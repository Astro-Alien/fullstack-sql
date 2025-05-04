const express =  require('express');
const authenticateToken = require('../middleware/auth');
const pool = require('../database');

const router = express.Router();

// Get all tasks
router.get('/fetchTasks',authenticateToken, async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tasks WHERE user_id = $1', [req.user.userId]);
        res.json(result.rows);
    }
    catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: error.message });
    }
});


// Create task
// router.post('/tasks', async (req, res) => {
//     const { id, title, description } = req.body;
//     try {
//         const result = await pool.query(
//             'INSERT INTO tasks (title, description) VALUES ($1, $2) WHERE id = $3 RETURNING *',
//             [title, description]
//         );
//         res.json(result.rows[0]);
//     } catch (error) {
//         console.error('Error creating task:', error);
//         res.status(500).json({ error: error.message });
//     }
// });



// //Update task
// router.put('/tasks/:id', async (req, res) => {
//     const { id } = req.params;
//     const { title, description, completed } = req.body;
//     try {
//         const result = await pool.query(
//             'UPDATE tasks SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *',
//             [title, description, completed, id]
//         );
//         if (result.rowCount === 0) {
//             return res.status(404).json({ error: 'Task not found' });
//         }
//         res.json(result.rows[0]);
//     } catch (error) {
//         console.error('Error updating task:', error);
//         res.status(500).json({ error: error.message });
//     }
// });

// // Post create task
// router.post('/tasks', async (req, res) => {
//     const {title, description} = req.body;
//     try {
//         const result = await pool.query(
//             'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *',
//             [title, description]
//         );
//         res.json(result.rows[0]);
//     }
//     catch(error) {
//         console.error('Error creating task:', error);
//         res.status(500).json({ error: error.message });
//     }
// });

// //Delete task
// router.delete('/tasks/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
//         if (result.rowCount === 0) {
//             return res.status(404).json({ error: 'Task not found' });
//         }
//         res.json(result.rows[0]);
//     } catch (error) {
//         console.error('Error deleting task:', error);
//         res.status(500).json({ error: error.message });
//     }
// });

module.exports = router;