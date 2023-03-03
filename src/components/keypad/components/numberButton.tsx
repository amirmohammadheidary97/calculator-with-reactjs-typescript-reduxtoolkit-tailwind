import { CSSProperties } from 'react';
import { useDispatch } from 'react-redux';
import { TNumber } from '../../../interfaces/interface';
import { setNumber } from '../../../redux/calculator.slice';
import BaseButton from './baseButton';
//////////
const NumberButton = ({ input = "0", style = undefined, className = "" }: { className?: string; style?: CSSProperties | undefined; input: TNumber }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setNumber({ input }))
    }
    return <button style={style} onClick={handleClick} className={` ${input === "." ? "w-[30.5%]" : "grow"} font-bold rounded-lg text-lg p-3 leading-relaxed text-txtnumber bg-bgNumber` + (className ?? "")} >
        {input}
    </button>
}

export default NumberButton;