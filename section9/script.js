/* var boolean = true;
var resultText = "";
if (boolean) {
 resultText = "Aの処理"
} else {
 resultText = "Bの処理"
};
console.log(resultText);
 */

// var resultText = boolean ? "Aの処理" : "Bの処理";



// 1. 変数の中にtrueまたは、falseが代⼊された時の処理を作ってください。
const boo = true;
const buu = false;
const boolean = boo ? 'true' : 'false';
console.log(boolean);
const buulean = buu ? 'true' : 'false';
console.log(buulean);

// 2. 代⼊された変数の中が5より⼤きい時にtrueの処理と、5より⼩さい時にfalseの処理を作ってください。
const num = 0;
var number = num > 5 ? 'true' : 'false';
console.log(number);
var numbar = num < 5 ? 'true' : 'false';
console.log(numbar);

// 3. 代⼊された変数の中が5より⼩さい時にtrueの処理と、5より⼩さい時にfalseの処理を作ってください。
var number = !num > 5 ? 'true' : 'false';
console.log(number);
var numbar = !num < 5 ? 'true' : 'false';
console.log(numbar);

// 4. 代⼊された変数の中が10以上の時にtrueの処理と、10以下の時にfalseの処理を作ってください。
var number = num >= 10 ? 'true' : 'false';
console.log(number);
var numbar = num <= 10 ? 'true' : 'false';
console.log(numbar);

// 5. 代⼊された変数の中に値が存在する場合はtrue、存在しない場合はfalseの処理にしてください。
var number = num === 0 || num ? 'true' : 'false';
console.log(number);