var assert = require('assert');

assert.equal(50,50); //ok
assert.equal(50,"50"); //ok (==)
assert.equal(50,70, "Eacha number is not equal"); //error
