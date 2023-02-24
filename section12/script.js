/* function showAlert() {
  alert("functionTestが実⾏されました。")
 };
 showAlert();

 var getText = function () {
  return "getTextが実⾏されたのでこのテキストを返します。"
 };
 console.log(getText());

 var getText = function () {
  var text = "getTextが実⾏されたのでこのテキストを返します。";
  console.log(text);
};
 */


// 1. 関数宣⾔を⾏い、実⾏された時にアラート表⽰させるよう処理を作ってください。
function clickAlert() {
  const world =document.getElementsByClassName('hello')[0];
  world.addEventListener('click', function() {alert('クリックされたよ！')}, false);//Hello Worldをクリックすると表示
};
clickAlert();

// 2. 関数式内で計算した結果を返し、それを外部から実⾏してコンソールで表⽰させてください。
function calculation() {
  const x = 1;
  const y = 9;
  const add = x + y;
  return add;
};
console.log(calculation());

// 3. スコープついて調べて⾃分なりの⾔葉でまとめてください。
/* 変数が影響できる範囲のこと。
グローバルスコープ
  最も外側で全体に影響できる。世界ルール。
  ちなみにvar、let、constをつけずに宣言するとブロック内でもグローバル変数になってしまう。
  また、windowsオブジェクトのプロパティとしても扱える。
ローカルスコープ
  関数スコープ
    名の通り関数の中でのみ有効。家ルール。
  ブロックスコープ
    {}で括られた範囲内でのみ有効。自分ルール。
 */