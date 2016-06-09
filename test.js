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


var FTCQ = require('./index.js');


// getQuestions
console.assert(FTCQ.getQuestions().length === 12);

// getChoices
// console.assert(FTCQ.getChoices(0).length === 7);


// calculate
console.assert(FTCQ.calculate([2,1,4,2,1,4,2,1,4,2,1,4]) === 2.33);
// calculateFactors
console.assert(FTCQ.calculateFactors([2,1,4,2,1,4,2,1,4,2,1,4])[1] === 3.5);

toThrowError(function() { FTCQ.calculateFactors([0,0,0,3,0]) }); // 長さのエラーを出す

// getFactorNameJP
console.assert(FTCQ.getFactorNameJP('emotionality') === '情動性');

// calculateFactorsByFactorName
console.assert(FTCQ.calculateFactorsByFactorName('emotionality', [2,1,4,2,1,4,2,1,4,2,1,4]) === 3.5);

console.log('すべてのテスト通過');
