
const express = require('express');
const corsMiddleware = require('./middleware/cors-middleware');

const app = express();

app.use(corsMiddleware);
app.use(express.json());

app.post('/email/contact', (req, res) => {
    console.log('req.url', req.url);
    console.log('req.body', req.body);
    res.sendStatus(200);
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Email service running on port ${ PORT }`));