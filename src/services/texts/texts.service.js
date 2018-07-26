// Initializes the `texts` service on path `/texts`
const createService = require('./texts.class.js');
const hooks = require('./texts.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/texts', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('texts');

  service.hooks(hooks);
};
