function createuser(name,age,qualifactions){
    return{
        name,
        age,
        qualifactions,

        getname(){
            console.log(`the name is${name}`)
        },
        getage(){
            console.log(`the age is${age}`)
        },
        getqualifactions(){
            console.log(`the qualifactions is${qualifactions}`)
        }

    }
}
let res1=createuser("ALAGUPANDI",25,"mechanical");
let res2=createuser("ajeeth",25,"mechanical");
res1.getname();
res2.getage();
