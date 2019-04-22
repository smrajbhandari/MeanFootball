module.exports = (app) => {
    const match = require('../controllers/match.controller.js');

    app.post('/api/match', match.addMatch);

    app.get('/api/match',match.getAllMatches);

    app.get('/api/match/:id',match.findMatchById);
}