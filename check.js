

function password(obj){
    let pass = "";
    for(let str in obj){
       pass += obj[str]+"#";
    }
    return pass;
}


const name = "selim";

const birthYear = 1999;

const siteName = "Google";


const selim = {name: name, birthYear: birthYear, siteName: siteName};

const res = password(selim);

console.log(res)