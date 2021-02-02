const nums = [1,2,3,4,5,6,7,8];

const part = nums.slice(2,5); //take value from index 2 to before index 5
console.log(part);
console.log(nums);

const removed = nums.splice(2,5); //delete value from index 2 to index 5+1
const inject = nums.splice(2,5,77,88) //delete value from index 2 to index 5+1 and injected 77,88
console.log(removed);
console.log(nums);

const together = nums.join(" "); //put all the elements of an array into a string
console.log(together);

const together1 = nums.join(","); //put all the elements of an array into a string
console.log(together1);
