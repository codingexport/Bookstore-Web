import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import Router from './router/book.route.js';
import User from './router/user.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());  // Ensure express.json() is used

// Connect to the database
mongoose
    .connect(URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

// Define routes
app.use("/book", Router);
app.use("/user", User);  // Correct usage of app.use()

// Start server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
