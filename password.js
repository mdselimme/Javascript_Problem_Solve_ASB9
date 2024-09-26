

function password(obj){
     if(typeof obj === "object"){
         if(typeof obj.siteName === "string" && obj.siteName !== ""){
             if(typeof obj.birthYear === "number" && obj.birthYear.toString().length === 4){
                 if(typeof obj.name === "string" && obj.name !== ""){
                     const pass = obj.siteName + "#" + (obj.name).toLowerCase() + "@" + obj.birthYear;
                     return pass;
                 }else{
                     return "Write a proper name";
                 }
             }else{
                 return "Write a proper Year";
             }
         }else{
             return "Write a proper Sitename";
         }
     }
     else{
         return "Invalid Obj !";
     }
 };
 
 const rahat = { name: "Selim", birthYear: 2019, siteName: "Google" } ;
 
 
 const res2 = password(rahat);
 
 
 console.log(res2)