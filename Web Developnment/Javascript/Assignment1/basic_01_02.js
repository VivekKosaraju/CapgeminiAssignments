function max(a,b,c)
{
    if(a>b && a>c)
    {
        console.log(a);
    }
    else if(b>a && b>c)
    {
        console.log(b);
    }
    else if(c>a && c>b)
    {
        console.log(c);
    }
}

max(1,2,3);
max(1,3,2);
max(3,2,1);