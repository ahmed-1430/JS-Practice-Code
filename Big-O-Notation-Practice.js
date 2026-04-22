// const starTime = performance.now()

// for( let i = 1; i < 5000; i++){
//     console.log(i);
// }

// const endTime = performance.now()

// console.log(`this code took time ${endTime - starTime}ms`);


const firstArray = [];
const secondArray = [];
for (let i = 1; i <= 60000; i++) {
    if (i <= 30000) {
        firstArray.push(i)
    }
    secondArray.push(i)
}
console.log(`First Array length = ${firstArray.length}`);
console.log(`Second Array length = ${secondArray.length}`);

console.time("map1")
const firsUserList = firstArray.map((Number) => ({userId: Number}))
console.timeEnd("map1")

console.time("map2")
const SecondUserList = secondArray.map((Number) => ({userId: Number}))
console.timeEnd("map2")