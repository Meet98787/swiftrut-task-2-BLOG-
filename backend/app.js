const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');
require('dotenv').config();

const app = express();

// Middleware
// app.use(cors());
const cors = require('cors');

// Allow requests from your frontend domain
const corsOptions = {
  origin: 'swiftrut-task-2-blog-frontend.vercel.app', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Routes
app.use('/api', postRoutes);

// Database connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

module.exports = app;
