function greet() {
    console.log("Hello World!");
}

greet()

const greet2 = () => {
    console.log("Hello World!");
}

const greet3 = new Function("console.log('Hello world')");

const greet4 = function(){
    console.log("Hello World!");
}


let greet5 = greet4;
greet5();

//callback function
//higher function
const test = function(callback) {
    console.log("call");
    callback();
}

test(function() {
    console.log("hello world")
})


test(function() {
    console.log("hello world2")
})

function checkNum() {
    const arrNumber = [1,2,4,7,5,6,3];
    let odd = 0;
    let even = 0;
    for(let i = 0; i < arrNumber.length; i++) {
        if(arrNumber[i] % 2 == 0) {
            even++;
        } else odd++;
    }

    console.log(even + " bro " + odd);
}

checkNum();

function sortNum() {
    arr = [3,63,7,8,5,2,1,6,8,5,3,9,7,4]
    let temp = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

console.log(arr);
}

function getTime() {
    const date = new Date;

    console.log(date);
}

getTime();