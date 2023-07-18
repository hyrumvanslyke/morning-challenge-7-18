// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
function addsToZero (x){
    for(let i = 0; i < x.length; i++){
        for(let j =0; j < x.length; j++){
            if(x[i] === -x[j]){
            console.log('true')
        }
        }
        
    }
}
addsToZero(array)