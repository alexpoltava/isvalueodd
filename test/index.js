const assert = require('assert');
const isOdd = require('..');

describe('Basic check', function() {
    it('should check Even properly', function() {
        assert.equal(isOdd(2), false, 'Fail');
    });
    it('should check Odd properly', function() {
        assert.equal(isOdd(1), true, 'Fail');
    });
    it('should handle Object properly', function() {
        assert.throws(() => isOdd({a: 'hello'}), Error, 'Fail');
    });
    it('should handle Function properly', function() {
        assert.throws(() => isOdd(function() { return true; }), Error, 'Fail');
    });
    it('should handle Empty value', function() {
        assert.throws(() => isOdd(), Error, 'Fail');
    });
});
