var x = 5;
function half(x)
{
    return (x/2);
}

function seven()
{
    x = 7;
    return (x);
}

function calculation(a,b,c)
{
    let x = a+b;
    let y = x/c;

    return y;
}

function isEven(a)
{
    if(a%2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function print()
{
    document.write("HELLO WORLD");
}
print();



function greet()
{
    var person = prompt('please enter your name');

    document.getElementById("para").innerHTML = "Hello " + person + " Have a nice day";
}

function greetOnly()
{
    var person = prompt('Please enter your name');
    if(person == "Alice" || person == "Bob")
    {
        document.getElementById("only").innerHTML = "Hello " + person + " Have a nice day";
    }
    else
    {
        document.getElementById("only").innerHTML = "Sorry invalid name";
    }
    
}
function sumN()
{
    var n = prompt('please enter the number');
    var sum = 0;
    for(var i = 0;i<=n;i++)
    {
        sum = sum+i;
    }
    document.getElementById("sumN").innerHTML = sum;
}

function sumM()
{
    var n = prompt('please enter the number');
    var sum = 0;
    for(var i = 0;i<=n;i++)
    {
        if(i%3 == 0 || i%5 == 0)
        {
            sum = sum+i;
        }
    }
    document.getElementById("sumM").innerHTML = sum;
}

function optionTwo()
{
    var pro = 0;
    var num1 = prompt('please enter the number 1');
    var num2 = prompt('please enter the number 2');
    var method = prompt('please enter the Method for PRODUCT TYPE: P AND for ADDITION TYPE: A ');

    
    var a = parseInt(num1);
    var b = parseInt(num2);
    if(method == "P")
    {
        document.getElementById("optionTwo").innerHTML = num1 * num2;
    }
    else if(method == "A")
    {
        document.getElementById("optionTwo").innerHTML = a + b;
    }
}

function multiTable()
{
    var num = prompt("ENTER THE NUMBER LESS THAN OR EQUAL TO 12");
    if(num <= 12)
    {
        for(var i = 1;i<=10;i++)
        {
            console.log(num * i);
        }
    }
    else
    {
        document.getElementById("optionTwo").innerHTML = "NO ENTER THE NUMBER LESS THAN 12";
    }
}

function prime()
{
    var i = 0;
    var count = 0;
    var num = prompt("ENTER THE NUMBER");
    for(i=0;i<num;i++)
    {
        if(num % i == 0)
        {
            count++ ;
        }
    }
    if(count > 2)
    {
        console.log("Not Prime");
    }
    else
    {
        console.log("Prime");
    }
}

function listLarge()
{
    var gre = 0;
    var fruits = [1,20,30,4];
    var gre = fruits[0];
    for(var i = 1;i<=fruits.length;i++)
    {
        if(fruits[i] > gre)
        {
            gre = fruits[i];
        }
        
    }
    return gre;

}

function revese()
{
    var gre = 0;
    var num = [1,20,30,4];
    
    for(var i = num.length ;i>=0 ;i--)
    {
        console.log(num[i]);
    }

}

function findEle()
{
    var num = prompt("Entry the number");
    var yep = parseInt(num);
    var arr = [1,2,3,4,5,6,7,8,9];

    for(var i = 0;i<=arr.length;i++)
    {
        if(yep == arr[i])
        {
            return "no";
            break;
        }
        else
        {
            return "yes";
        }
    }

}

function oddprint()
{
    var num = [1,2,3,4,5,6,7,8,9];
    for(var i = 0;i<num.length;i++)
    {
        if(i%2 == 0)
        {
            console.log(num[i]);
        }
    }
}

function totalList()
{
    var sum = 0;
    var num = [1,2,3,4,5,6,7,8,9];
    for(var i = 0;i<num.length;i++)
    {
        sum = sum + num[i];
    }
    console.log(sum);
}

function checkPalindrome()
{
    const string = prompt('Enter a string: ');

    var up = string.split('');
    var down = up.reverse();

    var final = down.join('');

    if(string == final)
    {
        console.log("It is a palindrome");
    }
    else
    {
        console.log("It is a not palindrome");
    }
}

function perSqu()
{
    for(var i = 1; i<5 ; i++)
    {
        console.log( i * i);
    }
}

function margeLast()
{
    var first = ["a","b","c"];
    var sec   = [1,2,3]; 
    
    var final = first.concat(sec);

    return final;
}

function mergeAlter()
{
    var a = [1,3,5];
    var b = [2,4,6];

    var final = [];
    for(var i = 0;i<a.length;i++)
    {
        final.push(a[i]);
        final.push(b[i]);
    }
    return final;
}

function sortIt()
{
    var first = [1,4,6];
    var sec   = [2,3,5]; 
    
    var final = first.concat(sec);

    return final.sort();
}

function splitintoarray()
{
    var num = 2342;
    var up = (""+num).split("");
    return up;
}

function frame()
{
    var list = ["Hello", "World", "in", "a", "frame"];

    console.log("******");
    for(var i = 0;i<list.length;i++)
    {
        
        console.log( "* " + list[i] + " *");
        
    }
    console.log("******");
}

