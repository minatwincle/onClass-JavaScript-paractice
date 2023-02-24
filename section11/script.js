/* for (var i = 1; i < 10; i++) {
  console.log("ループ" + i + "回⽬");
 };

 var items = ["リンゴ", "バナナ", "イチゴ"];
for (index in items) {
 console.log(items[index]);
};

var teachers = [
   { name: "太郎", age: 25, subject: "国語", },
   { name: "浩司", age: 30, subject: "数学", },
   { name: "花⼦", age: 26, subject: "社会", }
  ];
for (teacher of teachers) {
  console.log(teacher);
}; 
 */


// 1. forを使ったループ処理を作ってください。
for(let i = 1; i <= 5; i++) {
  console.log(i * i);
};

// 2. for inを使ったループ処理を作ってください。
const weather = ['晴れ', '雨', '曇り', '雪'];
for(container in weather) {
  console.log(weather[container]);
};

// 3. for ofを使ったループ処理を作ってください。
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
];
for(dish of dishes) {
  console.log(dish);
};
