
export type TOperator = "plus" | "multiply" | "division" | "minus" | "equals"
export interface ICalculatorState {
    result: string,
    display: string,
    currentOperation: TOperator
}

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const operators = ["+", "*", "/", "-"]
const stringReader = (str: string): string => {
    let result = "0";
    str.split("").forEach((char: string) => {
        if (numbers.includes(char)) {
            if (result === "0") result = "0"
            else {
                result += char;
            }
        }
        else if (operators.includes(char)) {
            if (char === "+") {
                result = String(Number(result) + Number(char))
            }
            else if (char === "-") {
                result = String(Number(result) - Number(char))
            }
            else if (char === "*") {
                result = String(Number(result) * Number(char))
            }
            else if (char === "/") {
                
                result = String(Number(result) / Number(char))
            }
        }
    })


    return result;
}