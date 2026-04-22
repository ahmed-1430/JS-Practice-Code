const starTime = performance.now()

for( let i = 1; i < 5000; i++){
    console.log(i);
}

const endTime = performance.now()

console.log(`this code took time ${endTime - starTime}ms`);