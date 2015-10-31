# ftcq-12-ja

日本語のFTCQ12の質問票の文言と点数計算

## install

```sh
npm install ftcq-12-ja
```

## usage

```js
var FTCQ = require('ftcq-12-ja');
```

質問一覧を取得

```js
FTCQ.getQuestions();
```

質問の選択肢を取得

```js
FTCQ.getChoices(0); // Q1の選択肢の配列
FTCQ.getChoices(4); // Q5の選択肢の配列
```

点数を計算

**factor1〜4の平均点**


|factor|平均点の出し方|
|-----------|------------|
|1|Q3, Q6, Q10, Q12の回答の平均点|
|2|Q1, Q4, Q7の回答の平均点|
|3|Q2, Q5, Q8の回答の平均点|
|4|Q9, Q11の回答の平均点|

小数点第二位で四捨五入

```js
// 引数はQ1~Q12 の回答の配列
FTCQ.calculateFactors([2,1,4,2,1,4,2,1,4,2,1,4]);
//=>{
		1: 3.5,
		2: 2,
		3: 1,
		4: 2.5
	}
```



**総合平均点**

```js
// 引数はQ1~Q12 の回答の配列
FTCQ.calculate([2,1,4,2,1,4,2,1,4,2,1,4]); // 2.33 を返す。
```



## LICENSE
MIT
