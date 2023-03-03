import { useDispatch } from 'react-redux';
import { TOperator } from '../../../interfaces/interface';
import { setOperator } from '../../../redux/calculator.slice';
import BaseButton from './baseButton';
//////////
const OperatorButton = ({ operator = "" }: { operator: TOperator }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setOperator({ operator }))
    }

    return (<BaseButton bg='bgOperator' color='txtoperator' onClick={handleClick}>{operator}</BaseButton>);
}

export default OperatorButton;