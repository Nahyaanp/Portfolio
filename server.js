const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, images, etc.)
app.use(express.static('../Frontend/public'));
app.use(express.static(path.join(__dirname, '../Frontend/assets')));
app.use('/assets', express.static(path.join(__dirname, '../Frontend/assets')));

app.get('/', (req, res) => {
    res.sendFile('portfolio.html', { root: '../frontend/public' });
});
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
