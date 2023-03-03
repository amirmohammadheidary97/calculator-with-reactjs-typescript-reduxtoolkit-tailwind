import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clear } from '../../../redux/calculator.slice';
import { useAppDispatch } from '../../../redux/store';
import BaseButton from './baseButton';
//////////
const ClearButton = () => {
    const dispatch = useDispatch();
    const handleClick = () => { 
        dispatch(clear())
    }

    return (<BaseButton bg="bgClear" color='txtclear' onClick={handleClick}>C</BaseButton>);
}

export default ClearButton;