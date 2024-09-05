//Second Largest Digit in a String

var secondHighest = function(s) {

    let numericStr = s.replace(/[^\d]/g, "");
    let numbersArray = numericStr.split('').map(Number);
    let largest = numbersArray[0];
    let slargest = -1
    for( let i=1; i<numbersArray.length; i++ ){
        if(numbersArray[i] > largest){
            slargest = largest;
            largest = numbersArray[i];
        }else if( numbersArray[i] < largest && numbersArray[i] > slargest){
            slargest = numbersArray[i];
        }
    }
    return slargest;
};