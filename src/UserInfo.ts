interface UserOb{
    name:string,
    age:number
}
function setUser(user1:UserOb,user2:UserOb):string{
    return user1.name+user2.name;
}
type updatedProps=Pick<UserOb,'age'>
type updatePro=Partial<UserOb>
function updateAge(updatedProp:updatedProps){
    return updatedProp.age+1;
}
const result =setUser({
    name:"FD",
    age:30
},{
    name:'eeeoe',
    age:30
});
console.log(result);
const newAge=updateAge({
    age:30
})
console.log(newAge)
const obj={
    name:'eeeoe',
    age:10
}
obj.name="geelpo"
// value inside the obj and arr can be change in const but the reference remain the same 
console.log(obj.name)

type ob={
   readonly name:string,
     readonly age:string
}
type Useqr={
    name:string,
    age:string
}
const user:Readonly<Useqr>={
    name:'eeeoe',
    age:"30"
}