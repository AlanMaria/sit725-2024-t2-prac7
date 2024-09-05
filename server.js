const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const adoptRoutes = require('./routes/adoptRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);  // Integrating socket.io with the server

const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/dogcare')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'Public' directory
app.use(express.static(path.join(__dirname, 'Public')));

// Routes
app.use(adoptRoutes);
app.use(reviewRoutes);

// Socket.io logic
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle incoming messages
    socket.on('send-message', (message) => {
        console.log('Message received:', message);
        io.emit('receive-message', message);  // Broadcast the message to all clients
    });

    // Emit a random number every second
    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server with socket.io integration
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
