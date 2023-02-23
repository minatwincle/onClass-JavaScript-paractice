/* var numA = 20;
var numB = 30;
if (numA == 20 && numB == 40) {
 console.log("ANDの条件と⼀致した処理");
 console.log(numA == 20 && numB == 40);
} else {
 console.log("ANDの条件と⼀致しなかった処理");
 console.log(numA == 20 && numB == 40);
};

var numA = 10;
var numB = 30;
if (numA == 20 || numB == 40) {
 console.log("ANDの条件と⼀致した処理");
 console.log(numA == 20 || numB == 40);
} else {
 console.log("ANDの条件と⼀致しなかった処理");
 console.log(numA == 20 || numB == 40);
};

var boolean = true;
if (!boolean) {
 console.log("NOTの条件と⼀致した処理");
 console.log(boolean);
} else {
 console.log("NOTの条件と⼀致しなかった処理");
 console.log(boolean);
};
 */

// 1. AND(&&)の条件を作成し、その処理に⼊るよう作ってください。（elseの処理も作成してください）
const numA = 10;
const numB = 20;
if(numA === 10 && numB ===20){
  console.log('AかつB');
  console.log(numA === 10 && numB ===20);
}else {
  console.log('AかつB、ではない');
  console.log(numA === 10 && numB ===20);
};

// 2. OR(||)の条件を作成し、その処理に⼊るよう作ってください。（elseの処理も作成してください）
if(numA <= 0 || numB <= 0){
  console.log('AまたはB');
  console.log(numA <= 0 || numB <= 0);
}else {
  console.log('AでもBでもない');
  console.log(numA <= 0 || numB <= 0);
}

// 3. NOT(!)の条件を作成し、その処理に⼊るよう作ってください。⽐較条件は数値型の⽐較でお願いします。（elseの処理も作成してください）
if(numA !== 10 && numB !== 20){
  console.log('Aが10ではなく、かつBが20ではない');
  console.log(numA !== 10 && numB !== 20);
}else {
  console.log('Aが10かつBが20');
  console.log(numA !== 10 && numB !== 20);
}
