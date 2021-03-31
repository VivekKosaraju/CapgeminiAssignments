function MyCalculato()
{
    var n = prompt("Enter the number between 1 to 7");
    var a = prompt("Enter number 1");
    var b = prompt("Enter number 2");

    var ch = parseInt(n);
    var n1 = parseInt(a);
    var n2 = parseInt(b);

    if(n == 1)
    {
        console.log(n1 + n2);
    }
    else if(n == 2)
    {
        console.log(n1 - n2);
    }
    else if(n == 3)
    {
        console.log(n1 * n2);
    }
    else if(n == 4)
    {
        console.log(n1 / n2);
    }
    else if(n == 5)
    {
        console.log(Math.pow(n1, n2));
    }
    else if(n == 6)
    {
        console.log((n1 + n2) / 2);
    }
    else
    {
        console.log("ENTER NUMBER BETWEEN 1 TO 7");
    }

   
}