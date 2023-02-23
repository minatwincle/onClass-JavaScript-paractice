/* var boolean = false;
if(boolean){
 console.log("trueの処理");
 console.log(boolean);
} else {
 console.log("falseの処理");
 console.log(boolean);
};
 */
/* var boolean = false;
 if (boolean) {
 console.log("trueの処理");
 console.log(boolean);
 }
 `console.log("テスト");`
 else {
 console.log("falseの処理");
 console.log(boolean);
 } ; */


// 1. elseを使⽤する時の注意点
/* ・ifが記述されていることが前提。
・条件に関係なく、ifから漏れたものが処理される。
・ifとelseの間に処理を記述しない。
 */

// 2. JavaScriptで実装した時の確認ポイント
/* ・実装したときに正確に動くかどうか。
・コンソールにエラー表示がされていないか。
 */

// 3. 数値型を⽐較してelseの処理に⼊る処理を作ってください。
let num = 100;
if(num === 90) {
  console.log('OK');
}else {
  console.log('Umm...');
};

// 4. ⽂字列型を⽐較してelseの処理に⼊る処理を作ってください。
let str = 'OK';
if(str === 'Umm...'){
  console.log('Umm');
}else {
  console.log(str);
};
