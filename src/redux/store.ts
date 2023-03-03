import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import calculatorReducer from './calculator.slice';
//
export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export default store