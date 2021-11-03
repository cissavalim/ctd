!true; //false
!false; //true
!!false; //false
!!true; //true
!1; //false
!!1; //true
!0; //true
!!0; //false
!!""; //false
let x = 5;
let y = 9;
x < 10 && x !== 5; //false
x > 9 || x === 5; //true
!(x === y); //true

/*------------------*/

x = 10;
y = "a";
y === "b" || x >= 10; //true

x = 3;
y = 8;
!(x == "3" || x === y) && !(y !== 8 && x <= y); //false

let str = "";
let msg = "haha!";
let eBonito = "false";
!((str || msg) && eBonito); //false
