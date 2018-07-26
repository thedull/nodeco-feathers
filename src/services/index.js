const messages = require('./messages/messages.service.js');
const texts = require('./texts/texts.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(messages);
  app.configure(texts);
};
