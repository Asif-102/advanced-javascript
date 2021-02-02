const students = [
    {id:21, name:'Omar Sunny'},
    {id:31, name:'Maannaaaaaa'},
    {id:41, name:'Moyouri'},
    {id:71, name:'DeepJol'}
];

// const nameOfStudents = [];

// for(let i=0; i<students.length; i++){
//     const element = students[i].name;
//     nameOfStudents.push(element);
// }
// console.log(nameOfStudents);

const names = students.map(s => s.name);
console.log(names);

const ids = students.map(s => s.id);
console.log(ids);

const bigger = students.filter(s => s.id>31);
console.log(bigger);

const biggerOne = students.find(s => s.id>31);
console.log(biggerOne);