const numbers = [3,4,5,6,7,8];
// const output = [];
// for(let i=0;i<numbers.length;i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// function square(element){
//     return element * element;   <==| const square = element => element*element
// }

numbers.map(function(element, index ,array){ // 3ta parameter theke jokhon j koita icca pass kora jai jemon amr index na lagle index pass korbo na
    console.log(element ,index , array);
})



// const result = numbers.map(function(element){
//    return element*element;
// })
const result = numbers.map(x => x*x);

console.log(result);

const bigger = numbers.filter(x => x>5);
console.log(bigger);

const smaller = numbers.filter(x => x<5); // filter array return kore
console.log(smaller);

const isThere = numbers.find(x => x>6);//find first e j sortw puron hobe oitai return korbe
console.log(isThere);