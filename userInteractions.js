const interactions = [];

function logInteraction(userId, message) {
    interactions.push({ userId, message, timestamp: new Date() });
}

function getInteractions() {
    return interactions;
}

module.exports = { logInteraction, getInteractions };