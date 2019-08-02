var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {

  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

//test to see 1 + 4 is equal to 5.
it("it can add one to four", function(){
  calculator.previousTotal = 4;
  calculator.add(1);
  assert.equal(5, calculator.runningTotal)
})

//test to confirm 7 - 4 = 3
it("it can subtract four from seven", function(){
  calculator.numberClick(7);
  calculator.operatorClick('=');
  calculator.subtract(4);
  assert.equal(3, calculator.runningTotal);
})

//test to confirm 3 * 5 = 15
it("it can multiply three to four", function(){
  calculator.numberClick(3);
  calculator.operatorClick('*');
  calculator.numberClick(5);
  calculator.operatorClick('=');
  assert.equal(15, calculator.runningTotal);
})

//test to confirm 21 / 7 = 3
it("can divide twentyone by seven", function(){
  calculator.numberClick(2);
  calculator.numberClick(1);
  calculator.operatorClick('/');
  calculator.numberClick(7);
  calculator.operatorClick('=');
  assert.equal(3, calculator.runningTotal);
})

//test to check that clicking 2 then 1 returns the value 21.
it("can get a running total twentyone", function(){
  calculator.numberClick(2);
  calculator.numberClick(1);
  assert.equal(21, calculator.runningTotal)
})

//check to see you can combine operations for 7-4 = 3, * 7 = 21.
it("can have multiple operators", function(){
  calculator.numberClick(7);
  calculator.operatorClick('-');
  calculator.numberClick(4);
  calculator.operatorClick('=');
  calculator.operatorClick('*');
  calculator.numberClick(7);
  calculator.operatorClick('=');
  assert.equal(21, calculator.runningTotal);
})

//check you can clear total, with 2 = 2,  clear , + 10 = 10.
it("can clear its total of one", function(){
  calculator.numberClick(2);
  calculator.operatorClick('=');
  calculator.clearClick();
  calculator.operatorClick('+');
  calculator.numberClick(10);
  calculator.operatorClick('=');
  assert.equal(10, calculator.runningTotal);
})

});
