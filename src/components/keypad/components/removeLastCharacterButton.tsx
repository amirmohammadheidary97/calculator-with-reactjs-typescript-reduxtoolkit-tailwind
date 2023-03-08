import React, { useState, useEffect, CSSProperties } from 'react';
import { removeLastChar } from '../../../redux/calculator.slice';
import { useAppDispatch } from '../../../redux/hooks';
import RippledButton from './button/RippledButton';
//////////
const RemoveLastCharacterButton = ({ style = undefined, className = "" }: { className?: string; style?: CSSProperties | undefined; }) => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(removeLastChar())
    }

    return (<RippledButton style={style} onClick={handleClick} className={` font-bold rounded-lg text-lg p-3 leading-relaxed text-txtnumber bg-bgNumber ` + (className ?? "")} >
        {'<='}
    </RippledButton>);
}

export default RemoveLastCharacterButton;