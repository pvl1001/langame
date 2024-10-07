import cn from "classnames";
import {PropsWithChildren} from "react";
import s from "./Container.module.scss";
import {Row} from './Row';
import {Title} from "./Title";


type Props = {
    className?: string
}

export function Container({children, className}: PropsWithChildren<Props>) {
    return (
        <div className={cn(s._, className)}>
            {children}
        </div>
    );
}

Container.Row = Row;
Container.Title = Title;
