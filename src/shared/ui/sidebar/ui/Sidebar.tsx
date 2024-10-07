import cn from "classnames";
import {Link} from "react-router-dom";
import {Logo} from "shared/ui/logo";
import BookIcon from '../svg/book.svg?react';
import SettingsIcon from '../svg/seings.svg?react';
import SupportIcon from '../svg/support.svg?react';
import TransactionIcon from '../svg/transaction.svg?react';
import s from "./Sidebar.module.scss";


const items = [
    {
        icon: <TransactionIcon className={s.transaction_icon}/>,
        name: 'История транзакций'
    },
    {
        icon: <BookIcon className={s.book_icon}/>,
        name: 'Забронировать'
    },
    {
        icon: <SettingsIcon className={s.settings_icon}/>,
        name: 'Настройки'
    },
    {
        className: s.support,
        icon: <SupportIcon className={s.support_icon}/>,
        name: 'Поддержка'
    },
];

export function Sidebar() {
    return (
        <nav className={s._}>
            <ul>
                <li className={s.item}>
                    <Logo className={s.logo}/>
                </li>

                {items.map((item) =>
                    <li key={item.name} className={cn(s.item, item.className)}>
                        <Link to={'/'}>
                            {item.icon}
                            {item.name}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>

    );
}
