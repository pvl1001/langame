import cn from "classnames";
import s from "./Container.module.scss";


type Props = {
    rowKey: string
    rowValue: string
    className?: string
}

export function Row({className, rowKey, rowValue}: Props) {
    return (
        <div className={cn(s.row, className)}>
            <p className={s.row__key}>{rowKey}</p>
            <p className={s.row__value}>{rowValue}</p>
        </div>
    );
}
