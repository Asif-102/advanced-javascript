let bonus = 20; //global

function sum(first,second){
    let result = first + second + bonus;
    // console.log(bonus);
    console.log(result);//scope
    if(result > 9){
        var mood = "happy";
        mood = 'fishy';
        mood = 'funky';  //<== block scope
        mood = 'cranky';
        console.log(mood);//scope
    }
    return result;
}

const output = sum(3,7);
// console.log(bonus);
// console.log(output);