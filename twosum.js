// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].


var a = [2,7,11,15];
var t = 9

//hasOwnProperty example

// const twoSum = (a, t) => {
//     let x = {};
//     for (let i=0; i<a.length; i++) {
//         let num = a[i];
//         x[num] = i
//     }
//     for (let j=0; j<a.length; j++){
//         let d = t - a[j];
//         if (x.hasOwnProperty(d) && x[d] !== j) {
//             return [j, x[d]]
//         }
//     }
   

// }
// console.log(twoSum(a, t));

//the 'in' operator gives us the index of the array
// for (let i=0; i<a.length; i++)
// let result = []
// for (let i=0; i<a.length; i++) {
//     // how do i look at number a[i]
//     for (let j=i+1; j < a.length; j ++ ) {
//         const s = a[i] + a[j]
//         //console.log(`${a[i]} + ${a[j]} = ${s}`)
//         if ((a[i] + a[j]) === t) {
//             console.log('found them', i, j);
//             result.push(i);
//             result.push(j)
//             return result
            
//         }

//     }
// }