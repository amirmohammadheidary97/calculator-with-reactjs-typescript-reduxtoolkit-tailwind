import * as React from 'react';
import Ripple from './ripple';

const RippledButton = (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    return (
    <div className='p-2 m-0 w-[100%] h-[100%]'>
        <button {...props} className={"relative overflow-hidden w-[100%] " + (props?.className ?? "")} children={[props.children, <Ripple color={"#1fecf9"} duration={1000} />]} />
    </div>);
}

export default RippledButton;