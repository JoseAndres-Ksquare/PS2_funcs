let counter = 0;
const iterationCounter = (arr) => {

    arr.reduce((a,b)=>{
        if(a>=b){
            const accumulated = a-b;
            counter += accumulated;
        }
        return b;
    });
}
iterationCounter([4,2,1,7,3]);

console.log(counter);