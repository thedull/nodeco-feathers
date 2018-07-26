const assert = require('assert');
const app = require('../../src/app');

describe('\'texts\' service', () => {
  it('registered the service', () => {
    const service = app.service('texts');

    assert.ok(service, 'Registered the service');
  });
});
