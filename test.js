function toThrowError(fn) {
    console.assert( (function() {
        try {
            fn();
            return false;
        }
        catch (e) {
            return true;
        }
    })() )
}


var FTND = require('./index.js');


// getQuestions
console.assert(FTND.getQuestions().length === 6);

// getChoices
console.assert(FTND.getChoices(0).length === 4);
console.assert(FTND.getChoices(1).length === 2);
console.assert(FTND.getChoices(2).length === 2);
console.assert(FTND.getChoices(3).length === 4);
console.assert(FTND.getChoices(4).length === 2);
console.assert(FTND.getChoices(5).length === 2);


// calculate
console.assert(FTND.calculate([0,0,0,0,0,0]) === 7);
console.assert(FTND.calculate([3,0,0,0,0,0]) === 4);
console.assert(FTND.calculate([2,1,0,3,1,0]) === 6);
console.assert(FTND.calculate([0,0,0,3,0,0]) === 10);
console.assert(FTND.calculate(['0','0','0','3','0','0']) === 10);

toThrowError(function() { FTND.calculate([0,0,0,3,0]) }); // 長さのエラーを出す
toThrowError(function() { FTND.calculate([0,0,0,0,0,4]) }); // 値のエラーを出す

console.log('すべてのテスト通過');
