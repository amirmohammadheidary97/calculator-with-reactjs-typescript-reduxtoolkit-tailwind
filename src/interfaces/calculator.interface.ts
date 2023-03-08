
export type TOperator = "+" | "*" | "/" | "-" | "none"
export type TNumber = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
export interface ICalculatorState {
    result: string,
    display: string,
    currentOperation: TOperator
}
