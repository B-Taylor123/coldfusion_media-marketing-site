const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.post('/email/contact', cors(), (req, res) => {
    console.log('req.url', req.url);
    console.log('req.body', req.body);
    res.sendStatus(200);
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Email service running on port ${ PORT }`));