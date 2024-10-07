import {LoginForm} from "features/auth_forms";
import {Link} from "react-router-dom";
import {Paths} from "shared/lib/Paths.ts";
import {Logo} from "shared/ui/logo";

import AppStoreIcon from '../../svg/app store.svg?react';
import GooglePlayIcon from '../../svg/google play.svg?react';
import s from "./LogInPage.module.scss";


type Props = {}

export function LogInPage({}: Props) {
    return (
        <div className={s._}>
            <Logo className={s.logo}/>

            <LoginForm/>

            <div className={s.registration_link__container}>
                <p>Если у вас еще нет аккаунта?</p>
                <Link to={Paths.REGISTRATION} className={s.registration_link}>Зарегистрируйтесь</Link>
            </div>


            <p className={s.text_install}>Установите приложение</p>

            <div className={s.stores}>
                <a href="https://play.google.com/store/"><GooglePlayIcon/></a>
                <a href="https://www.apple.com/app-store/"><AppStoreIcon/></a>
            </div>

        </div>
    );
}
