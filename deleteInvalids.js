

function deleteInvalids(arr){
    const arrNew = [];
    if(Array.isArray(arr)){
        for(let arrVal of arr){
            if(typeof arrVal === "number"){
                arrNew.push(arrVal);
            }else{
                return arrNew;
            }
        }
        return arrNew;
    }else{
        return "Invalid Input !";
    }
}

const inputdata = ["1", {num:2},NaN];

const result = deleteInvalids(inputdata);

console.log(result)