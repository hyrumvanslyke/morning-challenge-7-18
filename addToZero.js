// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
function addsToZero (x){ // my take on the problem
    for(let i = 0; i < x.length; i++){
        for(let j =0; j < x.length; j++){
            if(x[i] === -x[j]){
            console.log('true')
        }
        }
        
    }
}
addsToZero(array)

let value = false // correct answer according to teacher
for(i = 0; i < array.length; i++){
    for(j = 0; j < array.length; j++){
        if(i !== j) {
            if(array[i] + array[j] === 0) {
                value = true
            }
        }
    }
}

console.log(value)