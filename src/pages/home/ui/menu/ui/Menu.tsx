import cn from "classnames";
import DeviceIcon from '../svg/device.svg?react';
import LogOutIcon from '../svg/logOut.svg?react';
import ProblemIcon from '../svg/problem.svg?react';
import SelectIcon from '../svg/selectGame.svg?react';
import SessionIcon from '../svg/session.svg?react';
import s from "./Menu.module.scss";
import {MenuItem} from "./menu_item/MenuItem.tsx";


type Props = {
    className?: string
}

const menu = [
    {
        className: s.device,
        name: 'Вернуться на рабочий стол',
        icon: <DeviceIcon/>,
    },
    {
        className: s.select,
        name: 'Выбрать игру',
        icon: <SelectIcon/>,
    },
    {
        className: s.problem,
        name: 'Сообщить о проблеме',
        icon: <ProblemIcon/>,
    },
    {
        className: s.session,
        name: 'Продлить сессию',
        icon: <SessionIcon/>,
    },
    {
        className: s.logout,
        name: 'Завершить сессию',
        icon: <LogOutIcon/>,
        onClick: () => {
            delete localStorage.auth
        }
    },
];

export function Menu({className}: Props) {
    return (
        <ul className={cn(s._, className)}>
            {menu.map(item =>
                <li key={item.name}>
                    <MenuItem {...item}/>
                </li>
            )}
        </ul>
    );
}
