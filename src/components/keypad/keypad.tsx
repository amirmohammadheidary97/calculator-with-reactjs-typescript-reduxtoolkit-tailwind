import React, { useState, useEffect } from 'react';
import { TNumber } from '../../interfaces/interface';
import EqualButton from './components/equalButton';
import NumberButton from './components/numberButton';
import OperatorButton from './components/operatorButton';
const Keypad = () => {
    const _79: TNumber[] = ["7", "8", "9"];
    const _46: TNumber[] = ["4", "5", "6"];
    const _13: TNumber[] = ["1", "2", "3"];

    return (
        <div className='w-[100%] m-0 p-3 gap-3 flex flex-row justify-start items-stretch'>
            <div className='p-0 w-[80%] gap-3 flex flex-col justify-start items-stretch'>
                <div className='p-0 gap-3 flex flex-row justify-between items-stretch'>
                    {_79.map((num) => (
                        <NumberButton key={num} input={num} />
                    ))}
                </div>
                <div className='p-0 gap-3 flex flex-row justify-between items-stretch'>
                    {_46.map((num) => (
                        <NumberButton key={num} input={num} />
                    ))}
                </div>
                <div className='p-0 gap-3 flex flex-row justify-between items-stretch'>

                    {_13.map((num) => (
                        <NumberButton key={num} input={num} />
                    ))}
                </div>
                <div className='p-0 gap-3 flex flex-row justify-between items-stretch'>
                    <NumberButton className=' grow' input={"0"} />
                    <NumberButton input={"."} />
                </div>
            </div>
            <div className=' w-[20%] p-0 gap-3 flex flex-col justify-start items-stretch'>
                <EqualButton />
            </div>
        </div>
    );
}

export default Keypad;