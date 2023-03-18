import { CSSProperties } from 'react';
import { TNumber } from '../../../interfaces/calculator.interface';
import { setNumber } from '../../../redux/calculator.slice';
import { useAppDispatch } from '../../../redux/hooks';
import RippledButton from './button/RippledButton';
//////////
const NumberButton = ({ input = "0", style = undefined, className = "", }: { className?: string; style?: CSSProperties | undefined; input: TNumber }) => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        setTimeout(() => {
            dispatch(setNumber({ input }))
        }, 0);
    }
    return <RippledButton id={input} style={style} onClick={handleClick} className={` font-bold rounded-lg text-lg p-3 leading-relaxed text-txtnumber bg-bgNumber ` + (className ?? "")} >
        {input}
    </RippledButton>
}

export default NumberButton;