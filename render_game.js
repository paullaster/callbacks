function adder(n1, n2, n3){
    const res = n1 + n2 + n3;
    setTimeout(subAdder, 100);
    subAdder(res,n1, n2, n3);
    console.log(res);
}
function subAdder(arg1, arg2,arg3,arg4){
    const resp = arg1 + arg2 + arg3 + arg4;
    setTimeout(subtractor, 50);
    console.log(resp);
}

function subtractor(){
    setTimeout(subSubtractor, 35);
}
function subSubtractor(){
    setTimeout(multiplier, 20);
}

function multiplier (){
    setTimeout(subMultiplier,10);
    console.log("multiplier");
}
function subMultiplier (){
    //const subM = n1 * n2 * n3;
    //console.log(subM);
}

adder(2,4,6);