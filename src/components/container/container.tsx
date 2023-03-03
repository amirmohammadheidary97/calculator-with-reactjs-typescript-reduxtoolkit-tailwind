// components
import Display from '../display/display';
import Keypad from '../keypad/keypad';
// styles
import "./container.styles.scss"
/////
const Container = () => {
    return (
    <div className='calculator-container p-4 mx-auto my-0 w-[100%] aspect-[0.6/1] max-w-[350px] rounded-[2.2rem] flex flex-col justify-start items-stretch'>
        <Display />
        <Keypad />
    </div>);
}

export default Container;