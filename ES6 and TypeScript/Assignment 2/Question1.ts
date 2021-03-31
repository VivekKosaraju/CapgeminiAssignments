class MyClass {
  private previousNo;
  private currentNo;
  constructor(current) {
    this.previousNo = fibo(currentNum - 1);
    this.currentNo = currentNum;
  }
  next() {
    return fibonacci(this.currentNo + 1);
  }
}
var fibonacci = function (num) {
  var a = 0,
    b = 1,
    f = 1;
  for (var i = 2; i <= num; i++) {
    f = a + b;
    a = b;
    b = f;
  }
  return f;
};
let myClass = new MyClass(5);
console.log(myClass.next());
