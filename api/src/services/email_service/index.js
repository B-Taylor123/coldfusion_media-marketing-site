
const express = require('express');
const corsMiddleware = require('./src/middleware/cors-middleware');
const sendEmail = require('./src/send-email');

const app = express();

app.use(corsMiddleware);
app.use(express.json());

app.post('/email/contact', async (req, res) => {
    const model = req.body;

    console.log('model', model);
    
    // Validate model
    if (!isCreateEmailRequestValid(model)) {
        res.sendStatus(400);
        return;
    }

    // Call send email
    const response = await sendEmail(req.body);

    // Return error if send email returns null
    if (response === null) {
        res.sendStatus(500);
        return;
    }

    // Return success if send email returns data
    res.sendStatus(200);
});

const isCreateEmailRequestValid = (model) => {
    const { firstName } = model;

    if (typeof firstName === 'undefined' | firstName === null | firstName.length <= 0) return false;

    return true;
};

const PORT = 5000;

app.listen(PORT, () => console.log(`Email service running on port ${ PORT }`));