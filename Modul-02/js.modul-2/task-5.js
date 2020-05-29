/************* Homework - MODUL - 2 - 5 *********/

const checkForSpam = function(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes("sale") || lowerCaseMessage.includes("spam");
}    


 
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
