class  rectangle
{
    constructor(width, height)
    {
        this.width = width;
        this.height = height;
    }


}
rectangle.prototype.getArea = function()
{
    var AreaH = this.height;
    var AreaW = this.width;

    var answ = AreaH * AreaW;

    return "Area is " + answ;
}

myRectangle = new rectangle(10,5);
console.log(myRectangle.width + " "+ myRectangle.height);

console.log(myRectangle.getArea());

myRec = new rectangle(9,4);
console.log(myRec.width + " "+ myRec.height);
console.log(myRec.getArea());

