import cn from "classnames";
import {InputHTMLAttributes, ReactNode, useState} from "react";
import s from "./Input.module.scss";


type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    code?: string
    error?: string
    className?: string
    icon?: ReactNode
    isBigStyle?: boolean
}

export function Input({isBigStyle, className, label, code, error, icon, ...inputProps}: InputProps) {
    let [isFocus, setIsFocus] = useState(false);

    function onFocus(e: any) {
        inputProps.onFocus?.(e);
        setIsFocus(true);
    }

    function onBlur(e: any) {
        inputProps.onBlur?.(e);
        setIsFocus(false);
    }

    return (
        <div className={cn(s._, className, isBigStyle && s._big)}>
            <p className={'label'}>{label}</p>

            <div className={cn(s.input, {
                [s.with_icon]: icon,
                [s.input_error]: error,
                [s.blur]: !isFocus && !inputProps.value,
            })}>

                {icon && <div className={s.icon}>{icon}</div>}

                <input
                    type={'text'}
                    placeholder=" "
                    {...inputProps}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    autoComplete={'off'}
                />

            </div>
        </div>
    );
}
