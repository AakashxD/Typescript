interface User{
    fname:string,
    age:number,
    city:string
}
function isLegal(user:User){
    user.age>18?console.log("True"):console.log("Fakes")
}
type Users={
    [key:string]:User
}
const users:Users={
    "1":{fname:"John",age:25,city:"New York"},
}
isLegal({
   fname:"Aakash",
   age:19,
   city:"Noida"
})
// interface is implement using class