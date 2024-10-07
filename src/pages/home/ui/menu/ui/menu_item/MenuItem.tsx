import cn from "classnames";
import {Link} from "react-router-dom";
import s from './MenuItem.module.scss';


type Props = {
    icon: JSX.Element
    name: string
    className: string
    onClick?: () => void
}

export function MenuItem({icon, name, className, onClick}: Props) {
    return (
        <Link to={'/'} className={cn(s._, className)} onClick={onClick}>
            {icon}
            {name}
        </Link>
    );
}
