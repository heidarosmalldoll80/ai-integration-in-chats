const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to AI Integration in Chats!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});