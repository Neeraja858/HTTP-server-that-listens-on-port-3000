// Import the built-in HTTP module
const http = require('http');

// Define the port the server will listen on
const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Check the URL of the request
    if (req.url === '/api' && req.method === 'GET') {
        // Set the response header to indicate JSON content
        res.writeHead(200, { 'Content-Type': 'application/json' });

        // Create a JSON object to send as the response
        const responseObject = {
            message: "Hello, welcome to the API!",
            status: "success",
            data: {
                id: 1,
                name: "Sample API",
                description: "This is a simple Node.js HTTP server example"
            }
        };

        // Send the JSON response
        res.end(JSON.stringify(responseObject));
    } else {
        // Handle requests to other URLs
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("404 Not Found");
    }
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/api`);
});
