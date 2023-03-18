import React, { useState, useEffect } from 'react';
import { TNumber } from '../../interfaces/calculator.interface';
import ClearButton from './components/clearButton';
import EqualButton from './components/equalButton';
import NumberButton from './components/numberButton';
import OperatorButton from './components/operatorButton';
import PointButton from './components/pointButton';
import RemoveLastCharacterButton from './components/removeLastCharacterButton';
import useKeyboard from './hooks';
///
const ButtonWrapper = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return <div {...props} className={" p-2 " + (props?.className ?? "")} />
}
///
const Keypad = () => {
    const _79: TNumber[] = ["7", "8", "9"];
    const _46: TNumber[] = ["4", "5", "6"];
    const _13: TNumber[] = ["1", "2", "3"];
    ///
    useKeyboard()
    ///
    return (
        <div className='w-[100%] m-0 p-3  flex flex-col justify-start items-stretch'>
            <div className=' p-0  flex flex-row justify-start items-stretch'>
                <ButtonWrapper className='basis-1/4'>
                    <ClearButton />
                </ButtonWrapper>
                <ButtonWrapper className='basis-1/4' >
                    <RemoveLastCharacterButton />
                </ButtonWrapper>
                <ButtonWrapper className='basis-1/4' >
                    <OperatorButton operator="/" />
                </ButtonWrapper>
                <ButtonWrapper className='basis-1/4' >
                    <OperatorButton operator="+" />
                </ButtonWrapper>
            </div>
            <div className=' p-0  flex flex-row justify-start items-stretch'>
                {_79.map((num) => (
                    <ButtonWrapper key={num} className='basis-1/4' >
                        <NumberButton input={num} />
                    </ButtonWrapper>
                ))}
                <ButtonWrapper className='basis-1/4' >
                    <OperatorButton operator="*" />
                </ButtonWrapper>

            </div>
            <div className=' p-0  flex flex-row justify-start items-stretch'>
                {_46.map((num) => (
                    <ButtonWrapper key={num} className='basis-1/4' >
                        <NumberButton input={num} />
                    </ButtonWrapper>
                ))}
                <ButtonWrapper className='basis-1/4' >
                    <OperatorButton operator="-" />
                </ButtonWrapper>
            </div>
            <div className=' p-0 flex flex-row justify-start items-stretch'>
                <div className='basis-3/4 m-0  flex flex-col justify-start items-stretch'>
                    <div className=' w-[100%] p-0 flex flex-row justify-start items-stretch'>
                        {_13.map((num) => (
                            <ButtonWrapper key={num} className='basis-1/3' >
                                <NumberButton input={num} />
                            </ButtonWrapper>
                        ))}
                    </div>
                    <div className=' w-[100%] p-0 flex flex-row justify-start items-stretch'>
                        <ButtonWrapper className='basis-2/3' >
                            <NumberButton input={"0"} />
                        </ButtonWrapper>
                        <ButtonWrapper className='basis-1/3' >
                            <PointButton />
                        </ButtonWrapper>
                    </div>
                </div>
                <ButtonWrapper className='basis-1/4' >
                    <EqualButton className="h-[100%]" />
                </ButtonWrapper>
            </div>
            {/* <div className='w-[100%] m-0 p-0 gap-3 flex flex-row justify-start items-stretch'>
                <div className='p-0 w-[80%] gap-3 flex flex-col justify-start items-stretch'>
                    <div className='p-0 gap-3 flex flex-row justify-between items-stretch'>
                        {_79.map((num) => (
                            <NumberButton className='basis-1/3' key={num} input={num} />
                        ))}
                    </div>
                    <div className='p-0 gap-3 flex flex-row justify-between items-stretch'>
                        {_46.map((num) => (
                            <NumberButton className='basis-1/3' key={num} input={num} />
                        ))}
                    </div>
                    <div className='p-0 gap-3 flex flex-row justify-between items-stretch'>

                        {_13.map((num) => (
                            <NumberButton className='basis-1/3 ' key={num} input={num} />
                        ))}
                    </div>
                    <div className='p-0 gap-3 flex flex-row justify-between items-stretch'>
                        <NumberButton className=' basis-2/3 ' input={"0"} />
                        <PointButton className=" basis-1/3 " />
                    </div>
                </div>
                <div className=' w-[20%] p-0 gap-3 flex flex-col justify-start items-stretch'>
                    <OperatorButton operator="*" className='basis-1/4' />
                    <OperatorButton operator="-" className='basis-1/4' />
                    <EqualButton className="basis-2/4" />
                </div>
            </div> */}
        </div>
    );
}

export default Keypad;