import React, { useState, useEffect, ReactNode } from 'react';
import { TBackgroundColor, TTextColor } from '../../../interfaces/interface';

interface IBaseButtonProps {
    children: ReactNode;
    className?: string;
    bg: TBackgroundColor;
    color: string
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    style?: React.CSSProperties
}

const BaseButton = ({ children, className, bg, color, style, onClick = () => { } }: IBaseButtonProps) => {
    return (
        <button style={style} onClick={onClick} className={`font-bold text-lg p-3 leading-relaxed ` + (className ?? "")} >
            {children}
        </button>
    );
}

export default BaseButton;