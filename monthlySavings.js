

function monthlySavings(savingsArr, livingCost){
    if(Array.isArray(savingsArr) && typeof livingCost === "number"){
        let totalSavings = 0;
        for(let money of savingsArr){
            if(money>=3000){
                totalSavings = totalSavings + (money - (money* (20/100)));
            }
            else{
                totalSavings += money;
            }
        }
        const savings = totalSavings - livingCost;
        if(savings >= 0){
            return savings;
        }else{
            return "Earn More";
        }
    }else{
        return "Invalid Input !";
    }
}

const savingsArr = 100;
const livingCost = [900, 2700, 3400];
const result = monthlySavings(savingsArr, livingCost);
console.log(result);
