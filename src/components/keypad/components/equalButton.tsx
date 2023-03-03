import React, { useState, useEffect, CSSProperties } from 'react';
import { useDispatch } from 'react-redux';
import { TNumber } from '../../../interfaces/interface';
import { setOperator } from '../../../redux/calculator.slice';
//////////
const EqualButton = ({  style = undefined, className = "" }: { className?: string; style?: CSSProperties | undefined;}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setOperator({ operator: "=" }))
    }

    return <button style={style} onClick={handleClick} className={` w-[100%] font-bold rounded-lg text-lg p-3 leading-relaxed text-txteqaul bg-bgEqaul  flex flex-row justify-center items-center ` + (className ?? "")} >
       =
    </button>

}

export default EqualButton;