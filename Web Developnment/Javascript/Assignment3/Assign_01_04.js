class Person
{
    constructor(first,middle,last)
    {
        this.first = first;
        this.middle = middle;
        this.last = last;
    }
    
}

var per1 = new Person("Anant","Bhushan");
per1.middle = "basant";
per1.last = "Bhushan"
console.log(per1.first + " " + per1.middle + " " + per1.last);