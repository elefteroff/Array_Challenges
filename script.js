// Always Hungry:

function alwaysHungry(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");   
        }
        else if(arr[i] == arr.length-1 && arr[i] !== "food") {
            console.log("I'm hungry");
        } 
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


// High Pass Filter:

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > cutoff) {
        filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// Better than average:

function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
        var avg = sum / arr.length;
        for(var j = 0; j < arr.length; j++) {
            if(arr[j] > avg) {
            count = count + 1;
            }
        }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


// Array Reverse:

function reverse(arr) {
    var newArray = [];
    for(var i = arr.length -1; i >= 0; i--) {
        newArray.push(arr[i]);
   }
    return newArray;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// Fibonacci Array:

function fibonacciArray(n) {
    var fibArr = [0, 1];
    var sum = fibArr[0] + fibArr[1];

    for(var i = 2; i <= n-1; i++) {
        sum = sum + fibArr[i-2];
        fibArr.push(sum);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


