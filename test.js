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

function getMean (arrNumber) {
    var sum  = function(arrNumber) {
        return arrNumber.reduce(function(prev, current, i, arrNumber) {
            return prev + current;
        });
    };
    var average = sum(arrNumber) / arrNumber.length;
    return Math.floor(average *100) /100;
}

var FTCQ = require('./index.js');


// getQuestions
console.assert(FTCQ.getQuestions().length === 12);

// getChoices
// console.assert(FTCQ.getChoices(0).length === 7);


// calculate
var answerIndexes = [
    4, // 'タバコは、今は美味しくないだろう。',
    0, // '目の前にタバコがあったら吸うのを止められないだろう',
    1, // '今吸ったら、頭が冴えるだろう',
    5, // 'タバコを吸っても嬉しくないだろう',
    0, // '直ちにタバコを手に入れるためなら何でもする',
    1, // '今吸ったら、疲れが減るだろう',
    2, // '吸えればすぐにでも吸いたい',
    1, // 'タバコがあったら吸う本数を制限するなんてできないだろう',
    6, // '火がついたタバコを手にしても吸わないだろう',
    2, // '吸ったら気持ちの落ち込みが減るだろう',
    3, // '吸える機会があっても簡単に断れるだろう',
    0, // 'いま吸えたら物事をもっと上手くやれるだろう'
];

var scores = [
    (4 + 1) * (-1) + 8, // 'タバコは、今は美味しくないだろう。',
    (0 + 1), // '目の前にタバコがあったら吸うのを止められないだろう',
    (1 + 1), // '今吸ったら、頭が冴えるだろう',
    (5 + 1) * (-1) + 8, // 'タバコを吸っても嬉しくないだろう',
    (0 + 1), // '直ちにタバコを手に入れるためなら何でもする',
    (1 + 1), // '今吸ったら、疲れが減るだろう',
    (2 + 1), // '吸えればすぐにでも吸いたい',
    (1 + 1), // 'タバコがあったら吸う本数を制限するなんてできないだろう',
    (6 + 1) * (-1) + 8, // '火がついたタバコを手にしても吸わないだろう',
    (2 + 1), // '吸ったら気持ちの落ち込みが減るだろう',
    (3 + 1) * (-1) + 8, // '吸える機会があっても簡単に断れるだろう',
    (0 + 1), // 'いま吸えたら物事をもっと上手くやれるだろう'
];

var factors = {
    1: getMean([scores[2], scores[5], scores[9], scores[11]]),
    2: getMean([scores[0], scores[3], scores[6]]),
    3: getMean([scores[1], scores[4], scores[7]]),
    4: getMean([scores[8], scores[10]]),
}

console.assert(getMean(scores) === 2.08)
console.assert(FTCQ.calculate(answerIndexes) === 2.08)

// calculateFactors
console.assert(FTCQ.calculateFactors(answerIndexes)[1] === factors[1]);
console.assert(FTCQ.calculateFactors(answerIndexes)[2] === factors[2]);
console.assert(FTCQ.calculateFactors(answerIndexes)[3] === factors[3]);
console.assert(FTCQ.calculateFactors(answerIndexes)[4] === factors[4]);

toThrowError(function() { FTCQ.calculateFactors([0,0,0,3,0]) }); // 長さのエラーを出す

// getFactorNames
console.assert(FTCQ.getFactorNames().length === 4)

// getFactorNameJP
console.assert(FTCQ.getFactorNameJP('emotionality') === '情動性');

// calculateFactorsByFactorName
console.assert(FTCQ.calculateFactorsByFactorName('emotionality', answerIndexes) === factors[1]);

console.log('すべてのテスト通過');
