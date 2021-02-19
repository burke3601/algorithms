//comparing reduce to a loop

// summing an array of numbers
const numbers = [1,2,3,5,7,11,13,17,19,23]

let result = 0;
for (let n of numbers) {
    result += n;
}
//console.log(result)


//args:
//a function that receives the cumulative value and the current value
// the starter value (optional)
// const r2 = numbers.reduce((tally, current)=> {
//     //console.log(`tally: ${tally}, current val: ${current}`)
//     // sum only odd numbers
//     if (current % 2 !== 0) {
//         return tally + current;
//     } else {
//         console.log(`skipping even number`)
//     return tally;
//     }
// }, 0);

//console.log(r2)

// a histogram (aka frequency chart)

const vehicles = [
    'car',
    'car',
    'truck',
    'car',
    'roller_skates',
    'semi',
    'truck',
    'semi',
    'car'

];

// {
//     car: 4,
//     semi: 2,
//     rollerskates: 1,
//     semi: 2
// }

const vehicleTypes = vehicles.reduce((obj, v) => {
    //do we already have obj[v]?
    //if so increase the value obj[v] + 1

    if (obj[v]){
        obj[v] = obj[v] + 1;
    } else{
        obj[v] = 1
        }

    //else, set obj[v] =1

    return obj
    //then return the updated obj
}, {})
console.log(vehicleTypes)

// const vehicleTypes = vehicles.reduce((obj, v) => (
//     obj[v] ? 
//         {                   // new object, with:
//             ...obj,         // a copy of the existing key/value pairs
//             [v]: obj[v] + 1 // with the key [v] whose value is obj[v] + 1
//         } 
//     : 
//         {                   // new object with:
//             ...obj,         // a copy of the existing key/value pairs
//             [v]: 1          // add a new key [v] with value 1
//         }
//     ), {});
// console.log(vehicleTypes);