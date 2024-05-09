let marks = prompt(`Enter your marks`);
let name  = prompt(`Enter Name`);

if( marks >= 80 && marks <= 100){
document.write(`Congratulation! ${name} You have got A+`);
}
else if( marks >= 70 && marks <= 79){
document.write(`Congratulation! ${name} You have got A`);
}
else if( marks >= 60 && marks <= 69){
document.write(`Congratulation! ${name} You have got B`);
}
else if( marks >= 50 && marks <= 59){
document.write(`Congratulation! ${name} You have got C`);
}
else if( marks >= 40 && marks <= 49){
document.write(`Thaks a lot... ${name} You have got D`);
}
else if( marks > 100 ){
document.write(`Enter valid Marks ${name} .`);
}

else{
  document.write(`Oops ${name} you are failed.`)
}

