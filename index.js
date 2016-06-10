/**
数値の配列の平均値を返す

@method getMean
@param {Array(Number)} arrayNumber ex. [1, 5, 6, 2]
@return Number
*/
function getMean (arrNumber) {
    var sum  = function(arrNumber) {
        return arrNumber.reduce(function(prev, current, i, arrNumber) {
            return prev + current;
        });
    };
    return sum(arrNumber) / arrNumber.length;
};

module.exports = exports = {

    /**
    質問一覧を返す

    @method getQuestions
    @return {Array(String)}
    */
    getQuestions: function() {

        return [
            'タバコは、今は美味しくないだろう。',
            '目の前にタバコがあったら吸うのを止められないだろう',
            '今吸ったら、頭が冴えるだろう',
            'タバコを吸っても嬉しくないだろう',
            '直ちにタバコを手に入れるためなら何でもする',
            '今吸ったら、疲れが減るだろう',
            '吸えればすぐにでも吸いたい',
            'タバコがあったら吸う本数を制限するなんてできないだろう',
            '火がついたタバコを手にしても吸わないだろう',
            '吸ったら気持ちの落ち込みが減るだろう',
            '吸える機会があっても簡単に断れるだろう',
            'いま吸えたら物事をもっと上手くやれるだろう'
        ];
   },

    /**
    indexで与えられた質問の選択肢を返す

    @method getChoices
    @param {Number} qsIndex 質問票のインデックス 0, 1, 2, ...
    @return {Array(String)}
    */
    getChoices: function(qsIndex) {

        return [
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7]
        ][qsIndex];
    },

    /**
    選択肢の最大・最小に添えるテキスト
    **/

    choicesHelperText: [
        '全くそう思わない',
        '非常にそう思う'
    ],

    /**
    選択肢の配列から、全体平均値を計算する

    @method calculate
    @param {Array(Number)} answerIndexes 選んだ選択肢のインデックスの配列(質問順)
    @return {Number} 平均値
    */
    calculate: function(answerIndexes) {

        var average = getMean(answerIndexes);

        return Math.floor(average *100) /100;
    },

    /**
    indexで与えられた選択肢の配列を、factor別にまとめ、それぞれ平均値を出し、Objectとして返す
    点数表から質問ごとの点数を算出して計算

    @method calculateFactorss
    @param {Array(Number)} answerIndexes 選んだ選択肢のインデックスの配列(質問順)
    @return {Object} factor名をkey、平均値をvalueとするペアからなるObject
    */
    calculateFactors: function(answerIndexes) {

        if (answerIndexes.length !== 12) {
            throw new Error('引数の長さが12でない');
        }

        return {
            1: exports.calculate([
                answerIndexes[2],
                answerIndexes[5],
                answerIndexes[9],
                answerIndexes[11]
            ]),
            2: exports.calculate([
                answerIndexes[0],
                answerIndexes[3],
                answerIndexes[6]
            ]),
            3: exports.calculate([
                answerIndexes[1],
                answerIndexes[4],
                answerIndexes[7]
            ]),
            4: exports.calculate([
                answerIndexes[8],
                answerIndexes[10]
            ])
        };
    },

    /**
    factorの項目名(英語)一覧を取得する
    @method getFactorNames
    @return {Array(String)} factor項目名の配列
    */
    getFactorNames: function() {
        factorNames = ['emotionality', 'expectancy', 'compulsivity', 'purposefulness']
        return factorNames
    },

    /**
    factorの項目名(日本語)を取得する

    @method getFactorNameJP
    @param {String} factor項目名(英語)
    @return {String} factor項目名(日本語)
    */
    getFactorNameJP: function(factorName) {
        var factorNameJPs = {
            'emotionality': '情動性',
            'expectancy': '期待性',
            'compulsivity': '強迫性',
            'purposefulness': '意図性'
        }
        return factorNameJPs[factorName]
    },

    /**
    項目名からfactor別の平均値を取得する

    @method calculateFactorsByFactorName
    @param {String}
    @return {Number}
    */
    calculateFactorsByFactorName: function(factorName, answerIndexes) {
        var factorNames = {
            'emotionality': 1,
            'expectancy': 2,
            'compulsivity': 3,
            'purposefulness': 4
        }
        var num = factorNames[factorName]
        return exports.calculateFactors(answerIndexes)[num]
    }
};
