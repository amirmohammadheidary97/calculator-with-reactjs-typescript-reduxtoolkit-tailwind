import { TOperator } from "../interfaces/interface";

export const calculateFn = (pervResult: string, input: string, operator: TOperator): string => {
    let newResult: string = pervResult.replaceAll(",", "");
    ////
    /* if input is an operator */
    switch (operator) {
        case "+":
            newResult = String(Number(pervResult) + Number(input))
            break;
        case "/":
            newResult = String(Number(pervResult) / Number(input))
            break;
        case "-":
            newResult = String(Number(pervResult) - Number(input))
            break;
        case "*":
            newResult = String(Number(pervResult) * Number(input))
            break;
        default:
            break;
    }
    // }
    ////
    return newResult
}