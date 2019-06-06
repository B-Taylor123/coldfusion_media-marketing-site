const express = require('express')();

const app = express();

app.post('/email/contact', (req, res) => {
    console.log('', JSON.parse(req));
    res.send(200);
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Email service running on port ${ PORT }`));