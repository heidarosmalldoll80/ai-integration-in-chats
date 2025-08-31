const interactions = [];

function logInteraction(userId, message) {
    if (typeof userId !== 'string' || !message) {
        throw new Error('Invalid userId or message.');
    }
    interactions.push({ userId, message, timestamp: new Date() });
}

function getInteractions() {
    return interactions;
}

module.exports = { logInteraction, getInteractions };