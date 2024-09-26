
function calculateMoney(ticketSellNumber){
    if(typeof ticketSellNumber === "number"){
        if(ticketSellNumber >=0){
            const singleTicketPrice = 120;
    const securityValue = 500;
    const stufflaunch = 50;
    const stuffNumber = 8;
    const totalCost = (singleTicketPrice*ticketSellNumber) - (securityValue+(stuffNumber * stufflaunch));
    return totalCost;
        }else{
            return "Invalid Number ! Please input positive Number.";
        }
    }else{
        return "Invalid Number ! Please input number value.";
    }
}


const ticketSellNumber = 93;

const result = calculateMoney(ticketSellNumber);
console.log(result);