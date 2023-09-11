const { Editpage } = require('./editpage.class');
const createModel = require('../../models/editpage.model');
const hooks = require('./editpage.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/editpage', new Editpage(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('editpage');

  service.hooks(hooks);
};