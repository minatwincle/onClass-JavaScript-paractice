let str = document.getElementsByClassName('hello')[0].textContent;

if(!str === 'Hello World!!!') {
  console.log('条件A');
  console.log(str);
}else if(str === 'Bye World...') {
  console.log('条件B');
  console.log(str);
}else {
  console.log('条件C');
  console.log(str);
};
