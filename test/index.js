const assert = require('assert');
const isValueOdd = require('..');

describe('Basic check', function() {
    it('should check Even properly', function() {
        assert.equal(isValueOdd(0), false, 'Fail');
    });
    it('should check Odd properly', function() {
        assert.equal(isValueOdd(1), true, 'Fail');
    });
    it('should handle Zero properly', function() {
        assert.equal(isValueOdd(0), false, 'Fail');
    });
    it('should handle conversable String properly', function() {
        assert.equal(isValueOdd('1'), true, 'Fail');
    });
    it('should handle nonconversable String properly', function() {
        assert.throws(() => isValueOdd('hello'), Error, 'Fail');
    });
    it('should handle Object properly', function() {
        assert.throws(() => isValueOdd({a: 'hello'}), Error, 'Fail');
    });
    it('should handle Function properly', function() {
        assert.throws(() => isValueOdd(function() { return true; }), Error, 'Fail');
    });
    it('should handle Array properly', function() {
        assert.throws(() => isValueOdd([1, 2, 3]), Error, 'Fail');
    });
    it('should handle Empty value', function() {
        assert.throws(() => isValueOdd(), Error, 'Fail');
    });
});
