const assertEqual = require('../assertEqual');
const tail = function(array) {
  return array.slice(1);
};


  



const assert = require('chai').assert;


describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
    
  });
});