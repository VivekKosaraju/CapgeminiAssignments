var arrow = (names: string[] )=> {
    let out = [];
    for(let color of names ){
        var row : any= {

        };
        row.name = color;
        row.length = color.length;
        out.push(row);
    }
    return out;
};

let names = ["Tom","Ivan","jerry"];
console.log(arrow(names));