var fruits = ["リンゴ", "バナナ", "イチゴ"];
console.log(fruits);
console.log(fruits[0]);


var teacher = {
  name: "太郎",
  age: 25,
  subject: "国語",
 }
console.log(teacher);
console.log(teacher.name);

var teachers = [
  {
  name: "太郎",
  age: 25,
  subject: "国語",
  },
  {
  name: "浩司",
  age: 30,
  subject: "数学",
  },
  {
  name: "花⼦",
  age: 26,
  subject: "社会",
  }
 ]

 
// 1. 3つ以上の値を⽤意して変数に代⼊してください。その1番⽬と3番⽬をコンソールで表⽰してください。
const food = ['寿司', 'ラーメン', 'うどん', 'かつ', '唐揚げ'];
console.log(food[0],food[2]);

// 2. key、value、プロパティーについて説明してください。
// プロパティ―とはオブジェクトの各要素のことで、その各要素それぞれの名称がkey、内容がvalue。

// 3. 3つほどプロパティを⽤意したオブジェクトを⽤意してコンソールで表⽰してください。
const minato = {
  name: '戸田港',
  age: '35',
  hobby: 'ソロキャンプ',
}
console.log(minato);

// 4. オブジェクトを3つ⽤意してそれを配列として代⼊してください。
// 配列の0番⽬と3番⽬を表⽰させ、その中のkeyを指定してコンソールに表⽰させてください。
const dishes =[
  {
    name: 'かつ丼',
    ingredients: ['かつ', 'ご飯', '玉ねぎ', '卵'],
    taste: '美味しい',
  },
  {
    name: '唐揚げ',
    ingredients: ['鶏肉', '小麦粉', '片栗粉'],
    taste: '美味しい',
  },
  {
    name: '寿司',
    ingredients: ['魚', 'ご飯', '酢'],
    taste: '美味しい',
  }
]
console.log(dishes[0].name,dishes[0].ingredients);
console.log(dishes[2].name,dishes[2].ingredients);
