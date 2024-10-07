import cn from "classnames";
import s from "./Container.module.scss";


type Props = {
    className?: string
    children: string
}

export function Title({children, className}: Props) {
    return (
        <h5 className={cn(s.title, className)}>{children}</h5>
    );
}
