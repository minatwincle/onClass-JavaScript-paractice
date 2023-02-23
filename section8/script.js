/* var x = 5
var y = 5
if (x > y) {
 console.log("xはyより⼤きい");
}

var x = 5
var y = 8
if (x >= y) {
 console.log("xはyより⼤きいまたは等しい");
}
 */

const x = 5;
const y = 3;
// 1. xがyより⼤きい時にifの処理へ⼊るようにしてください。
if(x > y) {
  console.log('xがyより⼤きい')
};

// 2. xがyより⼩さい時にifの処理へ⼊るようにしてください。
if(x < y) {
  console.log('xがyより小さい')
}else {
  console.log('xがyより小さくはない')
};

// 3. xがy以上の時にifの処理へ⼊るようにしてください。
if(x >= y) {
  console.log('xがy以上')
};

// 4. xがy以下の時にifの処理へ⼊るようにしてください。
if(x <= y) {
  console.log('xがy以下')
}else {
  console.log('xがy以下ではない')
};