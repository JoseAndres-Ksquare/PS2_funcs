const findNumber = (limit, arr)=>{
    for(let i = 1; i<limit; i++){
      
      const exist = arr.some(item=>item===i);
      if(!exist)return i;
      
    }
    return "no hay faltantes";
  }
  
  console.log(findNumber(7,[5,3,2,4,1]));