import { createSlice } from '@reduxjs/toolkit';
import {
    ICalculatorState, TOperator,
} from '../interfaces/interface';
import { calculateFn } from '../utils/calculate';
import { thousandSeparator } from '../utils/thousandSeparator';

const initialState: ICalculatorState = {
    result: '0',
    display: '0',
    currentOperation: ""
};

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        setNumber: (state, action) => {
            state.display += action.payload.input
            if (state.currentOperation !== "") {
                state.result = calculateFn(state.result, action.payload.input, state.currentOperation);
                setTimeout(() => {
                    state.currentOperation = "="
                }, 0);
            }
        },
        setOperator: (state: ICalculatorState, { type, payload }) => {
            if (state.display === "0" && (payload.operator === "-" || payload.operator === "+")) {
                state.display = payload.operator;
                state.result = "0";
            }
            else if (state.currentOperation === payload.operator) {
                state = state
            }
            if (state.display.indexOf(".") === state.display.length - 1) {
                state.display = state.display.substring(0, state.display.length - 1)
            }
            else if (state.currentOperation === "=") {
                state.display = state.result
            }
            else if (state.currentOperation === "+" && payload.operator === "-") {
                state.currentOperation = '-';
                state.display += '-';
            }
            else if (state.currentOperation === "-" && payload.operator === "+") {
                state.currentOperation = '-';
                state.display += '-';
            }
            else if ((state.currentOperation === "*" || payload.operator === "/")) {
                state.currentOperation = payload.operator;
                state.display += payload.operator;
            }
            else if (state.currentOperation === "") {
                state.currentOperation = payload.operator;
                state.display += payload.operator;
            }
        },
        clear: (state) => {
            state = initialState
        },
        removeLastChar: (state) => {
            if (["+", "/", "-", "*"].includes(state.display[state.display.length - 1])) {
                state.display.substring(0, state.display.length - 1)
                state.currentOperation = ""
            }
        },

    },
});

// actions
export const { setNumber, setOperator, clear, removeLastChar } = calculatorSlice.actions;

// selectors
export const displaySelector = (state: ICalculatorState) => state.display;

// reducer
export default calculatorSlice.reducer;
