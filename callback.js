//Callbacks
function cb1(){
    console.log("cb1 called");
}
 function cb2(){
    console.log("cb2 called");
 }
function cb3(){
    console.log("cb3 called");
    cb2();
}

 function fcaller(cbk1, cbk2){
    setTimeout(cb3,1500);
    console.log("fcaller called");
    cbk1();
 }
 fcaller(cb1, cb2);