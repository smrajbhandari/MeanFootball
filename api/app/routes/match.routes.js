module.exports = (app) => {
    const match = require('../controllers/match.controller.js');

    app.post('/api/match', match.addMatch);

    app.get('/api/match',match.getAllMatches);

    app.get('/api/match/:id',match.findMatchById);

    app.patch('/api/match/:id/substitute',match.addSubsitution);
    
    app.patch('/api/match/:id/event',match.addEvents);

    app.patch('/api/match/:id/commentary',match.addCommentary);

    app.patch('/api/match/:id/statistic',match.addStatistics);

    app.patch('/api/match/:id/status',match.updateStatus);


}