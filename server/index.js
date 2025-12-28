const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const symptomChecker = require('./services/SymptomChecker');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Chat Endpoint
app.post('/api/chat', (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    const result = symptomChecker.findCondition(message);

    if (result) {
        res.json({
            type: 'medical_advice',
            data: result,
            message: `Based on your symptoms, it looks like you might have ${result.condition}.`
        });
    } else {
        // Fallback response for unknown symptoms
        res.json({
            type: 'unknown',
            message: "I'm sorry, I couldn't find a specific condition matching those symptoms in my safety database. Please consult a doctor for a proper diagnosis. Could you try describing it differently?"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Jagruk Jeewan Server running on port ${PORT}`);
});
