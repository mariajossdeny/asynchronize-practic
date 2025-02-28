function sum(num1, num2){

    return num1* num2
}

function calc(num1, num2, result){
    return result(num1, num2)
}

console.log(calc(2,6,sum));

setTimeout(function () {
    console.log('Hi Javascript')
}, 5000)

function grettin(name){
    console.log(`hi ${name}`);
}

setTimeout(grettin, 5000, 'Maria');