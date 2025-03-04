const promise = new Promise(function(resolve, reject){
    resolve('Hey! I am learning')
});

const cows = 15; 

const countCows = new Promise(function(resolve, reject) {
    if(cows > 10) {
        resolve(`We have ${cows} cowa on the farm`);
    } else { 
        reject('There are no cows on the farm')
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error)
}).finally(()=>{
    console.log('Finally')
})