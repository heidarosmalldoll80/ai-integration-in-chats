const { ChatGPTAPI } = require('chatgpt');

const api = new ChatGPTAPI({
    apiKey: 'DEIN_API_KEY'
});

async function getResponse(inputText) {
    const res = await api.sendMessage(inputText);
    return res.text;
}

module.exports = { getResponse };