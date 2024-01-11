'use client'

import { ButtonProps } from "./Button.props";
import styles from './Button.module.css';
import cn from 'classnames';
import { useState } from "react";

export const Button = ({ children, arrow, appearance, className, ...props }: ButtonProps): JSX.Element => {
    const [count, setCount] = useState(0);

    const handlerClick = () => {
        setCount(count+1)
        console.log(count);
    }

    return (
        <button
            className={cn(styles.btn, className, {
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost',
                //[styles.arrow]: arrow
            })}
            {...props}
            onClick={handlerClick}
        >
            {children} {count}
        </button>
    );
};
