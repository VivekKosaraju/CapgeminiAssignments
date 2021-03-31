 var square=(x)=>{
     return x*x;
 }

var double=(x)=>{
    return x*2;
}

var composedValue = (square,double,value) =>{
    return square(double(value));
}

console.log(composedValue(square,double,5))