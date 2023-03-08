import { CSSProperties } from 'react';
import { TOperator } from '../../../interfaces/calculator.interface';
import { setOperator } from '../../../redux/calculator.slice';
import { useAppDispatch } from '../../../redux/hooks';
import RippledButton from './button/RippledButton';
//////////
const OperatorButton = ({ style = undefined, className = "", operator }: { className?: string; style?: CSSProperties | undefined; operator: TOperator }) => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        setTimeout(() => {
            dispatch(setOperator({ operator }))
        }, 0);
    }

    return <RippledButton style={style} onClick={handleClick} className={` w-[100%] font-bold rounded-lg text-lg p-3 leading-relaxed text-txteqaul bg-bgEqaul  flex flex-row justify-center items-center ` + (className ?? "")} >
        {operator}
    </RippledButton>
}

export default OperatorButton;