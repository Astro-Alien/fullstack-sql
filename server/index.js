const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// later specify the cors options
app.use(cors());
app.use(express.json());

app.use('/api/users', authRoutes);
app.use('/api/tasks', taskRoutes);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});