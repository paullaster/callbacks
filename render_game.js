function adder(n1, n2, cb){
    const res = n1 + n2;
    cb(n1,n2,res,cb);
    console.log(res);
}
function subAdder(arg1, arg2,arg3,cb){
    const resp = arg1 + arg2 + arg3;
    cb(arg1,arg2,resp,cb);
    console.log(resp);
}

function subtractor(a1,a2,a3,cb){
    const result = (a3 + a3) - (a1 + a2);
    cb(a1,a2,a3,result,cb);
    console.log(result);
}
function subSubtractor(x1,x2,x3,x4,cb){
    const subres = (x4 + x1 + x2 + x3) - x3;
    const subAdd1 = (x1 + x2 + x3);
    cb(x4, subAdd1, subres,cb);
    console.log(subres);
}
function multiplier (sub1,sub2,sub3,cb){
    const submut = sub1 *sub2;
    const submut2 = submut * sub3;
    cb(sub1, submut, submut2, cb);
    console.log(submut, submut2);
}
function subMultiplier (mut1, mut2, mut3){
    const fineresult = mut1 * mut2 * mut3;
    console.log(fineresult);
}

function finalResult (a,a2,cb1,cb2,cb3,cb4,cb5,cb6){
    cb1(a,a2, (a,a2,a3) =>{
        cb2(a,a2, a3,(a,a2,a3) =>{
            cb3(a,a2, a3,(a,a2,a3,a4)=>{
                cb4(a,a2, a3,a4,(a,a2,a3)=>{
                    cb5(a,a2,a3,(a,a2,a3)=>{
                        cb6(a,a2,a3)
                    });
                });
            });
        });
    });
}

finalResult(1,2, adder,subAdder,subtractor,subSubtractor, multiplier,subMultiplier);