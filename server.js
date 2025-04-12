import express from 'express'; 
// Import the express module
import dotenv from 'dotenv';

const app = express();

// Define a GET request
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Start the server and listen on a specific port
const PORT = process.env.PORT // Use environment variable 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});