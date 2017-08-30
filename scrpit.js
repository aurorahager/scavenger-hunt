console.log('js');

// EDABIT PRLBM: Is The Number Even Or Odd?

function isEvenOrOdd(num) {
    // is the number even?
    if (num % 2 === 0) {
        return "even";
    } // END if even 
    else {
        return "odd";
    } // END if odd 
} // END isEvenOrOdd function

/*''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''*/

//EDABIT PRLBM: Is The Number Even Or Odd?

// declare globals
var myNum = 2;
var myDec = 0.44;

// function that checks if a number is < or = 0
function lessThanOrEqualToZero(num) {
    // if num
    if (num <= 0) {
        return true;
    }//END if num
    else {
        return false;
    }//END else 	
}//END lessThanOrEqualToZero function

// CALL myNum and myDec into lessThanOrEqualToZero
lessThanOrEqualToZero(myNum);
lessThanOrEqualToZero(myDec);