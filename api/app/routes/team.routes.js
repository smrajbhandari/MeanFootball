module.exports = (app) => {
    const teams = require('../controllers/team.controller.js');

    app.post('/api/teams', teams.create);

    app.get('/api/teams', teams.findAll);

    app.get('/api/teams/:teamId', teams.findOne);

    app.put('/api/teams/:teamId', teams.update);

    app.delete('/api/teams/:teamId', teams.delete);
}