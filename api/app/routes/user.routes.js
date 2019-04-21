module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    app.post('/users', users.create);

    app.get('/users/check_existing_email', users.checkExistingEmail);

    app.post('/users/login', users.login);
}