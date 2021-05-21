// Solution 1

function convertFahrToCelsius(f) {
    if(typeof(f) === "number"){
        let c = (f-32)*5/9 ;
        return c
    }
    else if(typeof (f) === 'object'){
        if(Array.isArray(f)){
        //console.log('this is an array')
            return `${f} is not a valid number but an array`
        }
        else {
            let a = f;
            //console.log('this is an object')
            output =`${JSON.stringify(f)} is not a valid number but a ${typeof(f)}`
            return output
        }
    }else if(typeof f == 'string') {
        //console.log('this is a string')
        return `${f} is not a valid number but a ${typeof(f)}`
    }
}
console.log(convertFahrToCelsius(2453))


// Solution 2

const checkYuGiOh = (n)=>{
  
    let arr = [];
    let arr1 = [];
  
    if (typeof n == 'number' || !isNaN(n)  && !isNaN(parseFloat(n))){
        n = parseFloat(n)
        for (var x = 1; x <= n; x++){
            arr.push(x)
        } 
    //console.log(arr)
    arr1 = [...arr]
   for(var y = 0; y < arr1.length; y++){
       if(arr1[y] % 2 === 0 && arr1[y] % 3 === 0 && arr1[y] % 5 === 0){
           arr1[y] = "yu-gi-oh"
       } 
     else if(arr1[y] % 2 === 0 && arr1[y] % 3 === 0){
        arr1[y] = "yu-gi" 
       }
       else if(arr1[y] % 2 === 0 && arr1[y] % 5 === 0){
        arr1[y] = "yu-oh" 
       }
       else if(arr1[y] % 3 === 0 && arr1[y] % 5 === 0){
        arr1[y] = "gi-oh"
       }
       else if(arr1[y] % 5 === 0){
        arr1[y] = "oh" 
       }
       else if(arr1[y] % 3 === 0){
        arr1[y] = "gi" 
       }
       else if(arr1[y] % 2 === 0){
        arr1[y] = "yu" 
       }
   }
    }
else{
        arr1 = `inalid parameter: ${n}`
     }
return arr1
}
console.log(checkYuGiOh(12))