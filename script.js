function convertToRoman(num) {
  if (num < 0 || num > 100000) return "Invalid Input";
    
    const romanNumerals = [
        ["C̅", 100000], ["L̅", 50000], ["X̅", 10000], ["V̅", 5000], ["M", 1000],
        ["D", 500], ["C", 100], ["L", 50], ["X", 10], ["V", 5], ["I", 1]
    ];
    
    let result = "";
    
    for (const [symbol, value] of romanNumerals) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    
    return result;	
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));
// do not edit below this line
module.exports = convertToRoman
