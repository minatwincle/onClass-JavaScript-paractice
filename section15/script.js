/* const teacher = {name: "太郎", subject: "国語", profile: function() {console.log("担当教科は国語です")}};
teacher.profile();

function sumNum(x) {
  const result = x + 1;
  console.log(result);
};
sumNum(3);

function sumNum(x, y) {
  const result = x + y;
  console.log(result);
};
sumNum(997, 80);

function showText(x) {
  console.log(x);
};
showText(`引数`);

function tomato(price, func) {
  const name = "トマト";
  func(name, price);
}
const price = function price(name, price) {
  console.log(name + " の値段は" + price + "円です。");
};
tomato(100, price);
 */



// 1. プロパティーとメソッドの違いをまとめて3つほどメソッドを作ってください。
  // プロパティ―とはkeyとvalueの組み合わせにより定義された要素であり、メソッドとはそのvalueの部分が関数になっているものである。
const dishes =[
  {
    name: 'かつ丼',
    ingredients: ['かつ', 'ご飯', '玉ねぎ', '卵'],
    taste: function() {console.log('美味しい')},
  },
  {
    name: '唐揚げ',
    ingredients: ['鶏肉', '小麦粉', '片栗粉'],
    taste: function() {console.log('香ばしい')},
  },
  {
    name: '寿司',
    ingredients: ['魚', 'ご飯', '酢'],
    taste: function() {console.log('うましっ！')},
  }
];
dishes[1].taste();

// 2. 下記の関数を実⾏してその結果をコンソールに表⽰してください。（スコープ内に書く⽅法はだめです。）
function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。";
  return result;
};
console.log(fruit('笑顔', 0));

// 3. 下記の関数を経由して2つの関数を実⾏するような処理を作ってください。
function addTax(vegetable, price, func) {
  const taxPrice = Math.round(price * 1.10);
  func(vegetable, taxPrice);
};
const calc = (vegetable, taxPrice) => {
  console.log(vegetable + 'の税込み価格は' + taxPrice + '円です。')
};

// トマトの税込み価格をコンソールに表⽰させる処理
addTax('トマト', 198, calc);
// ⽟ねぎの税込み価格をコンソールに表⽰させる処理
addTax('玉ねぎ', 68, calc);