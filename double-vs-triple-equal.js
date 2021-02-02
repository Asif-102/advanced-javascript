const first = 2;
const second = "2";
if (first == second) {
    console.log("condition is true for double equal"); //this is check value
}
else if (first === second) {
    console.log("condition is true for triple equal"); //this is check value with type
}
else {
    console.log("condition is false");
}

const number = 0;
const boolean = false;
if(number == boolean){
    console.log("condition is true for double equal");
}
else if (number === boolean){
    console.log("condition is true for triple equal");
}
else {
    console.log("condition is false");
}