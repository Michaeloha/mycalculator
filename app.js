// // Fri - 15/5/20. L-19. introduction to variables & Constants
// let userName = 'Max';
// userName = ' Manu';

// // Sunday-17/5/20 L- 20 Declaring and Defining Variables
// // Notes
// // 3**2  exponential meaning 3 power 2 //9
// // use of backtick (``) to concatenate values (Template literate ) using ${}...


//        L-40 for the calculator.
// const defaultResult  = 0;
// let currentResult = defaultResult;
// let logEntries = [];

// // Get input from input Field
// function getUserNumberInput() {
//     return parseInt(userInput.value);
// }

// // Generate and write calculation log

// function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
//     const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
//     outputResult(currentResult, calcDescription); // from vendor.js
// }

// // function add(){
// //     const enteredNumber = getUserNumberInput();
// //     const initialResult = currentResult;
// //     currentResult = currentResult + enteredNumber;
// //     // currentResult += enteredNumber;
// //     createAndWriteOutput('+', initialResult, enteredNumber);
// //     const logEntry = {
// //         operator: "ADD",
// //         prevResult: initialResult,
// //         number: enteredNumber,
// //         result: currentResult
// //     };
// //     logEntries.push(logEntry);
// //     console.log(logEntries);
// // }

// function writeToLog (
//     operationIdentifier,
//     prevResult,
//     operationNumber,
//     newResult
// ) {
//     const logEntry = {
//         operator: operationIdentifier,
//         prevResult: prevResult,
//         number: operationNumber,
//         result: newResult
//     };
//     logEntries.push(logEntry);
//     console.log(logEntries);
    
    
// }

// function add(){
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult = currentResult + enteredNumber;
//     // currentResult += enteredNumber;
//     createAndWriteOutput('+', initialResult, enteredNumber);
//     writeToLog("ADD", initialResult, enteredNumber,currentResult);
// }


// function subtract(){
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult = currentResult - enteredNumber;
//     // currentResult -= enteredNumber;
//     createAndWriteOutput('-', initialResult, enteredNumber);
//     writeToLog("SUBTRACT", initialResult, enteredNumber,currentResult);
// }

// function multiply(){
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult = currentResult * enteredNumber;
//     // currentResult *= enteredNumber;
//     createAndWriteOutput('*', initialResult, enteredNumber);
//     writeToLog("MULTIPLY", initialResult, enteredNumber,currentResult);
// }

// function divide(){
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult = currentResult / enteredNumber;
//     // currentResult /= enteredNumber;
//     createAndWriteOutput('/', initialResult, enteredNumber);
//     writeToLog("DIVIDE", initialResult, enteredNumber,currentResult);
// }

// addBtn.addEventListener('click', add);
// subtractBtn.addEventListener('click', subtract);
// multiplyBtn.addEventListener('click', multiply);
// divideBtn.addEventListener('click', divide);

/* Sunday 24/5/20 L-43 using Arrays 
Sat 30/5/20L- 47 Adding a reusable function that uses object */



// // Wednesday 3/6/20 L-76 & L-77  working with if, else and else if

// const defaultResult  = 0;
// let currentResult = defaultResult;
// let logEntries = [];

// // Get input from input Field
// function getUserNumberInput() {
//     return parseInt(userInput.value);
// }

// // Generate and write calculation log

// function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
//     const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
//     outputResult(currentResult, calcDescription); // from vendor.js
// }


// function writeToLog (
//     operationIdentifier,
//     prevResult,
//     operationNumber,
//     newResult
// ) {
//     const logEntry = {
//         operator: operationIdentifier,
//         prevResult: prevResult,
//         number: operationNumber,
//         result: newResult
//     };
//     logEntries.push(logEntry);
//     console.log(logEntries);
    
    
// }

// function calculateResult(calculationType){
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     let mathOperator;
//     if (calculationType === 'ADD'){
//         currentResult += enteredNumber;
//         mathOperator = "+";

//     } else if (calculationType === 'SUBTRACT'){
//         currentResult -= enteredNumber;
//         mathOperator = '-';
//     } else if (calculationType === 'MULTIPLY'){
//         currentResult *= enteredNumber;
//         mathOperator = '*';
//     } else if (calculationType === 'DIVIDE'){
//         currentResult /= enteredNumber;
//         mathOperator = '/';
//     }
        

    
//     createAndWriteOutput(mathOperator, initialResult, enteredNumber);
//     writeToLog(calculationType, initialResult, enteredNumber,currentResult);   
// }

// function add(){
//     calculateResult('ADD');

// }

// function subtract(){
//     calculateResult('SUBTRACT');
// }

// function multiply(){
//     calculateResult('MULTIPLY');
// }

// function divide(){
//     calculateResult('DIVIDE');
// }

// addBtn.addEventListener('click', add);
// subtractBtn.addEventListener('click', subtract);
// multiplyBtn.addEventListener('click', multiply);
// divideBtn.addEventListener('click', divide);




// // Sat 6/6/20 L-79 The Logical AND  and OR operator
// // L-80 Understanding Operator Precedence. 

// const defaultResult  = 0;
// let currentResult = defaultResult;
// let logEntries = [];

// // Get input from input Field
// function getUserNumberInput() {
//     return parseInt(userInput.value);
// }

// // Generate and write calculation log

// function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
//     const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
//     outputResult(currentResult, calcDescription); // from vendor.js
// }


// function writeToLog (
//     operationIdentifier,
//     prevResult,
//     operationNumber,
//     newResult
// ) {
//     const logEntry = {
//         operator: operationIdentifier,
//         prevResult: prevResult,
//         number: operationNumber,
//         result: newResult
//     };
//     logEntries.push(logEntry);
//     console.log(logEntries);
    
    
// }

// function calculateResult(calculationType){
//     if (
//         calculationType !== "ADD" &&
//         calculationType !== "SUBTRACT" &&
//         calculationType !== "MULTIPLY" &&
//         calculationType !== "DIVIDE"
//          ){
//              return;
//          }


//     // if (
//     //     calculationType === "ADD" ||
//     //     calculationType === "SUBTRACT" ||
//     //     calculationType === "MULTIPLY" ||
//     //     calculationType === "DIVIDE"
//     //     ){
//             const enteredNumber = getUserNumberInput();
//             const initialResult = currentResult;
//             let mathOperator;
//             if (calculationType === 'ADD'){
//                 currentResult += enteredNumber;
//                 mathOperator = "+";
        
//             } else if (calculationType === 'SUBTRACT'){
//                 currentResult -= enteredNumber;
//                 mathOperator = '-';
//             } else if (calculationType === 'MULTIPLY'){
//                 currentResult *= enteredNumber;
//                 mathOperator = '*';
//             } else if (calculationType === 'DIVIDE'){
//                 currentResult /= enteredNumber;
//                 mathOperator = '/';
//             }
                
        
//             createAndWriteOutput(mathOperator, initialResult, enteredNumber);
//             writeToLog(calculationType, initialResult, enteredNumber,currentResult);   
//         // }
            
//     }
        
    

// function add(){
//     calculateResult('ADD');

// }

// function subtract(){
//     calculateResult('SUBTRACT');
// }

// function multiply(){
//     calculateResult('MULTIPLY');
// }

// function divide(){
//     calculateResult('DIVIDE');
// }

// addBtn.addEventListener('click', add);
// subtractBtn.addEventListener('click', subtract);
// multiplyBtn.addEventListener('click', multiply);
// divideBtn.addEventListener('click', divide);




// Sat 6/6/20 L-79  L-81 Beyound true/false:Truthy and Falsy value


const defaultResult  = 0;
let currentResult = defaultResult;
let logEntries = [];

// Get input from input Field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// Generate and write calculation log

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor.js
}


function writeToLog (
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operator: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
    
    
}

function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();
    if (
        calculationType !== "ADD" &&
        calculationType !== "SUBTRACT" &&
        calculationType !== "MULTIPLY" &&
        calculationType !== "DIVIDE" ||  
        // enteredNumber === 0      //  if 0 is entered, then no changes (zero is treated as false) 
        !enteredNumber
         ) {
             return;
         }


    // if (
    //     calculationType === "ADD" ||
    //     calculationType === "SUBTRACT" ||
    //     calculationType === "MULTIPLY" ||
    //     calculationType === "DIVIDE"
    //     ){
            
            const initialResult = currentResult;
            let mathOperator;
            if (calculationType === 'ADD'){
                currentResult += enteredNumber;
                mathOperator = "+";
        
            } else if (calculationType === 'SUBTRACT'){
                currentResult -= enteredNumber;
                mathOperator = '-';
            } else if (calculationType === 'MULTIPLY'){
                currentResult *= enteredNumber;
                mathOperator = '*';
            } else if (calculationType === 'DIVIDE'){
                currentResult /= enteredNumber;
                mathOperator = '/';
            }
                
        
            createAndWriteOutput(mathOperator, initialResult, enteredNumber);
            writeToLog(calculationType, initialResult, enteredNumber,currentResult);   
        // }
            
    }
        
    

function add(){
    calculateResult('ADD');

}

function subtract(){
    calculateResult('SUBTRACT');
}

function multiply(){
    calculateResult('MULTIPLY');
}

function divide(){
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);