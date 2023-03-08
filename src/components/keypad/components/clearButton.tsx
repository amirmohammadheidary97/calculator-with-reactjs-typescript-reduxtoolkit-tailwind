import { CSSProperties } from 'react';
import { clear } from '../../../redux/calculator.slice';
import { useAppDispatch } from '../../../redux/hooks';
import RippledButton from './button/RippledButton';

//////////
const ClearButton = ({ style = undefined, className = "" }: { className?: string; style?: CSSProperties | undefined; }) => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(clear())
    }

    return <RippledButton id='c' style={style} onClick={handleClick} className={` font-bold rounded-lg text-lg p-3 leading-relaxed text-txtnumber bg-bgNumber ` + (className ?? "")} >
        C
    </RippledButton>
}

export default ClearButton;