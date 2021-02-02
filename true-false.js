const age = 4;
if(age){ //age>0 then true age==0 then false
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
// const name = "Solaiman"

//Falsy
//===============
//0
//""
//undefined
//null
//NaN
//false

//Truthy
//=================
//'0' 
//' '
//[]
//{}
//'false'

let name = 12;
console.log(name);
if(name || name == 0){ //name.length > 0 then true if name="" then false
    console.log("condition is true");
}
else{
    console.log("condition is false");
}