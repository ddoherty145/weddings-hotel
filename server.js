import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { config } from 'dotenv';

config(); // Load environment variables

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Serve static files from the dist directory
app.use(express.static(join(__dirname, 'dist')));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Use the PORT environment variable or default to 4000
const port = process.env.PORT || 4000;

// Bind to host 0.0.0.0 to allow external connections
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
}); 