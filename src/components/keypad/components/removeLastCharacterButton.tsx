import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeLastChar } from '../../../redux/calculator.slice';
import BaseButton from './baseButton';
//////////
const RemoveLastCharacterButton = () => {
    const dispatch = useDispatch();
    const handleClick = () => { 
        dispatch(removeLastChar())
    }

    return (<BaseButton bg='bgClear' color='txtclear' onClick={handleClick}>{`<=`}</BaseButton>);
}

export default RemoveLastCharacterButton;