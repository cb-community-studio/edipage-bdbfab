const users = require("./users/users.service.js");
const editpage = require("./editpage/editpage.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(editpage);
  // ~cb-add-configure-service-name~
};
