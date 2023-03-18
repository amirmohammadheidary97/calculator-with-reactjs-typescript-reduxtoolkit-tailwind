import { createSlice } from '@reduxjs/toolkit';

import { calculateFn } from '../utils/calculate';
import * as math from 'mathjs';
import { ICalculatorState } from '../interfaces/calculator.interface';


const setWithSpaceAround = (str: string): string => {
    return ` ${str} `
}

const initialState: ICalculatorState = {
    result: '0',
    display: '0',
    currentOperation: "none"
};


export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        setPoint: (state: ICalculatorState) => {
            if (state.display.indexOf(".") !== state.display.length - 1) {
                if (!["+", "/", "-", "*", " "].includes(state.display[state.display.length - 1])) {
                    state.display += ".";
                }
            }
        },
        setNumber: (state: ICalculatorState, action) => {
            if (state.display === "0") {
                state.display = action.payload.input
            } else {
                state.display += action.payload.input
            }
            /////////////
            if (state.currentOperation !== "none") {
                const node = math.parse(state.display)
                const code1 = node.compile()
                state.result = code1.evaluate()
            }
            if (!state.display.split("").some(char => ["+", "/", "-", "*"].includes(char))) {
                state.result = state.display
            }
        },
        setOperator: (state: ICalculatorState, { type, payload }) => {
            if (state.display === "0" && (payload.operator === "-" || payload.operator === "+")) {
                state.display = payload.operator;
                state.result = "0";
            }
            /*
            
            new input situations : {
                empty => {
                    number input : new input replaces with old ,
                    operator input : new input  replaces with old if 
                    . 
                },
                0 => { 
                    new number replaces with old ,
                },
                number =>{
                    new number += old display ,
                },
                . => {

                }
            }
            
            */

            // else if (state.currentOperation === payload.operator) {
            //     state = state;
            // }
            /*if (state.display.endsWith("-") || state.display.endsWith("*") || state.display.endsWith("/") || state.display.endsWith("+")) {
                    state.display = state.display.substring(0, state.display.length - 1) + (payload.operator);
            }*/
            else if (state.currentOperation === "+" && payload.operator === "-") {
                state.currentOperation = '-';
                state.display += '-';
            }
            else if (state.currentOperation === "-" && payload.operator === "+") {
                state.currentOperation = '-';
                state.display += '-';
            }
            else if ((payload.operator === "*" || payload.operator === "/" || payload.operator === "-" || payload.operator === "+")) {
                state.currentOperation = payload.operator;
                
            }
        },
        clear: (state) => {
            state.display = "0"
            state.result = "0"
            state.currentOperation = "none"
        },
        removeLastChar: (state) => {
            if (state.display.length === 0) return
            ///
            const dsply: string = state.display;
            const lastChar: string = dsply.split("")[dsply.length - 1]
            if (["+", "/", "-", "*"].includes(lastChar)) {
                state.currentOperation = "none"
            }
            ///
            const newStr = state.display.substring(0, state.display.length - 1)
            state.display = newStr.length === 0 ? "0" : newStr
            ///
            if (state.currentOperation === "none" && !state.display.split("").some(char => ["+", "/", "-", "*"].includes(char))) {
                state.result = state.display
            }
        },
        calculate: (state) => {
            state.display = state.result
            // if (state.currentOperation === "none" && !state.display.split("").some(char => ["+", "/", "-", "*"].includes(char))) {
            //     state.result = state.display
            // }

        }

    },
});

//// actions
export const { setNumber, setPoint, calculate, setOperator, clear, removeLastChar } = calculatorSlice.actions;
//// selectors
export const displaySelector = (state: ICalculatorState) => state.display;
export const resultSelector = (state: ICalculatorState) => state.result;
//// reducer
export default calculatorSlice.reducer;
