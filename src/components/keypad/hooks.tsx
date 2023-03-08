import { useEffect } from 'react';
import { calculate, clear, setNumber, setOperator, setPoint } from '../../redux/calculator.slice';
import { useAppDispatch } from '../../redux/hooks';


const useKeyboard = () => {
    const dispatch = useAppDispatch()
    const keypressListener = (e: KeyboardEvent) => {

        if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key)) {
            dispatch(setNumber({ input: e.key }))
            // document.getElementById(e.key)?.click()
        }
        else {
            if (e.key === ".") dispatch(setPoint())
            if (e.key.toLowerCase() === "enter") dispatch(calculate())
            if (e.key.toLowerCase() === "c") dispatch(clear())
            else if (["/", "*", "+", "-"].includes(e.key)) {
                console.log(e.key)
                dispatch(setOperator({ operator: `${e.key}` }))
            }
        }
    }
    useEffect(() => {
        window.addEventListener("keypress", keypressListener)
        return () => window.removeEventListener("keypress", keypressListener)
    }, [])
}

export default useKeyboard;