import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | concept3', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:concept3');
    assert.ok(route);
  });
});
