function isEven(value){
  if(value%2==0){
    return true;
  }
  return false;
}
function testing(array,func){
  for(var i=0;i<array.length;i++){
    if(func(array[i])){
      return array[i];
    }
  }
}
const find = (values,fun)=>test(values,fun);
console.log(find([1, 3, 5, 4, 2], isEven));
