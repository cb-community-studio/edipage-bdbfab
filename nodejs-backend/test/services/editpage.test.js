const assert = require('assert');
const app = require('../../src/app');

describe('\'editpage\' service', () => {
  it('registered the service', () => {
    const service = app.service('editpage');

    assert.ok(service, 'Registered the service (editpage)');
  });
});
