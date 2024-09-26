const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect to MongoDB
connectDB();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));  // Serve static frontend

app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
