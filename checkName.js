

function checkName(name){
    if(typeof name === "string"){
        let checkStr = ["a", "y", "i", "e", "o", "u", "w"] ;
        let ifHave = 0;
        for(let i =0; i < name.length; i++){
            if(checkStr.includes(name[name.length -1].toLowerCase())){
                ifHave += 1;
                break;
            }
        }
        if(ifHave > 0){
            return "Good Name";
        }else{
            return "Bad Name";
        }
    }else{
        return "Invalid Input ! ";
    }
};

const result = checkName("skhak");
console.log(result);

