const numbers = [];
let total = 0;
do{
    let input = prompt ('Input number');
    if(input === null){
        break;
    }
    const value = Number (input);
    numbers.push(value);    
    console.log(numbers);
    
}   
while (true);

const sum = function (numbers){
    for (const number of numbers){
        total += number;
    }
    return total;
}
console.log(sum(numbers));