import cn from "classnames";
import {ComponentProps} from "react";
import ArrowIcon from 'shared/assets/svg/arrow.svg?react';
import s from "./SliderButton.module.scss";


type Props = ComponentProps<'button'> & (
    | {next: boolean, prev?: never}
    | {next?: never, prev: boolean}
    )

export function SliderButton({className, next, prev, ...props}: Props) {
    return (
        <button
            type={'button'}
            className={cn(s._, className, {
                [s.prev]: prev,
            })}
            {...props}
        >
            <ArrowIcon/>
        </button>
    );
}
