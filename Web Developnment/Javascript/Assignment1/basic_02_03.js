function numberArray(a)
{
    var z = [];
    for(var i = 0;i<a.length;i++)
    {
        var doit = a[i];
        var ans = parseFloat(doit);
        z.push(ans);
    }
    console.log(z);
}

var strings = ["1.2", "2.3", "3.4"];
var nums = numberArray(strings);