let addvalue=function(a=5){
    console.log(a);
};
addvalue();
addvalue(25);
var names=["name1","name2","name3","name4","name5"];
let userFriends=function(username: any,...friends: any)
{
    console.log(username)
    for(let friend of friends){
        console.log(friend);
    } 
}
var username="Virat";
userFriends(username,names);

let printcapitalname=function(...names:any){
    for(let name of names){
        console.log(name.toUpperCase());
    }
}
printcapitalname(...names);