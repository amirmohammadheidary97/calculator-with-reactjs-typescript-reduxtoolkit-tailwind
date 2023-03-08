import { useEffect } from 'react';
import { displaySelector, resultSelector } from '../../redux/calculator.slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thousandSeparator } from '../../utils/thousandSeparator';
////////
const Display = () => {
    const display = useAppSelector(state => state.calculator.display);
    const result = useAppSelector(state => state.calculator.result);

    useEffect(() => {
        console.log("display", display);
    }, [ display])
    useEffect(() => {
        console.log("result", result);
    }, [result])

    return (
        <div dir='ltr' className='gap-3 p-3 h-[150px] flex flex-col justify-start items-stretch'>
            <div className='tiny-scrollbar h-[50%] font-bold text-3xl text-white'>{thousandSeparator(result)}</div>
            <div className='tiny-scrollbar h-[50%] font-bold text-xl text-white'>{display}</div>
        </div>
    );
}

export default Display;