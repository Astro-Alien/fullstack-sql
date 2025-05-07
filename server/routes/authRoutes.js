const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../database');

require('dotenv').config();

const router = express.Router();

// login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const bcrypt = require('bcrypt');
    bcrypt.hash('Test', 12).then(console.log);
   
    if (user.rows.length === 0) {
        return res.status(401).send('Invalid username or password');
    }

    const match = await bcrypt.compare(password, user.rows[0].password_hash);

    if (!match) {
        return res.status(401).send('Invalid username or password');
    }

    const token = jwt.sign(  { userId: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;