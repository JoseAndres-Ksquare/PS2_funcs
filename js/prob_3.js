let res =[];

let arr = [];

arr[0]= [[1],[2],[9],[10],[25]];
arr[1]= [[4],[3],[8],[11],[24]];
arr[2]= [[5],[6],[7],[12],[23]];
arr[3]= [[16],[15],[14],[13],[22]];
arr[4]= [[17],[18],[19],[20],[21]];

const ulamSpiral = (pos)=>{

   return pos.map((arr2)=>{
        const y = arr2[1];
        const x = arr2[0];
        try{
        return [arr[x-1][y-1][0]];
        }catch(err){
            return "invalid pos"
        }

    });
    
}

console.log(ulamSpiral([[2,3], [4,2], [6,1]]));