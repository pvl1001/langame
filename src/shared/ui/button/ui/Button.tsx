import cn from "classnames";
import {ComponentProps, PropsWithChildren} from "react";
import s from "./Button.module.scss";


export type ButtonProps = ComponentProps<'button'> & {
    theme?: 'white' | 'grey'
    isPending?: boolean
    currency?: string
}

export function Button({children, className, theme, ...props}: PropsWithChildren<ButtonProps>) {
    return (
        <button type="button" className={cn(s._, className, s[theme ?? ''])} {...props}>
            {children}
        </button>
    );
}
