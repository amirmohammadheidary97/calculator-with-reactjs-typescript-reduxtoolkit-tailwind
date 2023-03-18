import * as React from 'react';
import Ripple from './ripple';

const RippledButton = (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    return (
        <button {...props} className={"relative overflow-hidden w-[100%] " + (props?.className ?? "")} children={[props.children, <Ripple color={"#1fecf9"} duration={1000} />]} />
  );
}

export default RippledButton;