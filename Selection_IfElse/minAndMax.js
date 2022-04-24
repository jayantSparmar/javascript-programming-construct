//program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
let min=1000;
let max=99;

for(let i =1; i<=5; i++) {

    let n = Math.floor(Math.random() * 900 + 100);
    console.log(n);
    if(max < n) {
        max = n;
    }
    if(min > n) {
        min = n;
    }
}
console.log("min number :" +min);
console.log("max number :" +max);