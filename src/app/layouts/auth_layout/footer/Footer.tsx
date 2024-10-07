import {Link} from "react-router-dom";
import CopyrightIcon from 'shared/assets/svg/COPYRIGHT.svg?react';
import s from "./Footer.module.scss";


type Props = {}

export function Footer({}: Props) {
    return (
        <footer className={s._}>
            <ul className={s.list}>
                <li><Link to={'/'}>Информация</Link></li>
                <li><Link to={'/'}>Вакансии</Link></li>
                <li><Link to={'/'}>Помощь</Link></li>
                <li><Link to={'/'}>Конфиденциальность</Link></li>
                <li><Link to={'/'}>Правила</Link></li>
                <li><Link to={'/'}>FAQ</Link></li>
                <li><Link to={'/'}>Прайс-лист</Link></li>
            </ul>
            <CopyrightIcon className={s.copyright}/>
        </footer>
    );
}
