// Require Express
const express = require('express');

// Initialize the Express application
const app = express();

// Define the port number
const PORT = process.env.PORT || 3000;

// Define a route for the root of the app
app.get('/', (req, res) => {
  res.send('Teamfight Tactics Item Builder is running!');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
