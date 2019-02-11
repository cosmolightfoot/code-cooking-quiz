const test = QUnit.test;
import weaponScore from '../src/weaponScore.js';
let scorecard = null;

QUnit.module('weapons score');
QUnit.testStart(function() {
    scorecard = { pirate: 0, ninja: 0, viking: 0 };
});



test('add one to viking within scorecard if axe is chosen', function(assert) {
    const scorecard = { pirate: 0, ninja: 0, viking: 0 };

    let result = weaponScore('axe', scorecard);
    let expected = { pirate:0, ninja: 0, viking: 1 };
    assert.deepEqual(result, expected);
});
test('add one to pirate within scorecard if cutlass is chosen', function(assert) {
    const scorecard = { pirate: 0, ninja: 0, viking: 0 };

    let result = weaponScore('cutlass', scorecard);
    let expected = { pirate:1, ninja: 0, viking: 0 };
    assert.deepEqual(result, expected);
});
test('add one to ninja within scorecard if shuriken is chosen', function(assert) {
    const scorecard = { pirate: 0, ninja: 0, viking: 0 };

    let result = weaponScore('shuriken', scorecard);
    let expected = { pirate:0, ninja: 1, viking: 0 };
    assert.deepEqual(result, expected);
});
