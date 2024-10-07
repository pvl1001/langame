import cn from "classnames";
import s from './Switch.module.scss';


type Props = {
    className?: string
}

export function Switch({className}: Props) {
    return (
        <div className={cn(s._, className)}>
            <input type="checkbox" id="switch"/>
            <label htmlFor="switch"></label>
        </div>
    );
}
