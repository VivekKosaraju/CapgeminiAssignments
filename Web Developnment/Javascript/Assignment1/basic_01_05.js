function padChars(a ,b)
{
    var str = "";
    for(var i = 0;i<=a;i++)
    {
        str+=b;
        
    }
    console.log(str);
}

padChars(5, "x");
padChars(7, "-");