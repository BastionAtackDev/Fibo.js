#!/usr/bin/env node

function generate(fnum,howMany){
    if (fnum === undefined || howMany === undefined){
        console.log("You forgot the parameters")
    }
    let i=0;
    let input = howMany;
    let string = "";
    let a=1;
    let b=1;
    let c=0;
    while(i < input){
        c=a+b;
        if(i<input && c>=fnum){
            string = string + c+' ';
        }
        b=c+a;
        i++;
        if(i<input && b>=fnum){
            string = string + b+' ';
        }
        i++;
        a=b+c;
        if(i<input && a>=fnum){
            string = string + a+' ';
        }
        i++;
    }
    return string
}

module.exports ={
    generate : generate,
}