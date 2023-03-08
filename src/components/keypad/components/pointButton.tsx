import { CSSProperties } from 'react';
import { setPoint } from '../../../redux/calculator.slice';
import { useAppDispatch } from '../../../redux/hooks';
import RippledButton from './button/RippledButton';
//////////
const PointButton = ({ style = undefined, className = "" }: { className?: string; style?: CSSProperties | undefined }) => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(setPoint())
    }

    return <RippledButton id='.' style={style} onClick={handleClick} className={` w-[100%] font-bold rounded-lg text-lg p-3 leading-relaxed text-txteqaul bg-bgEqaul  flex flex-row justify-center items-center ` + (className ?? "")} >
        {"."}
    </RippledButton>
}

export default PointButton;