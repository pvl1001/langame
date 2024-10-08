import {RegistrationForm} from "features/auth_forms";
import {Link} from "react-router-dom";
import ArrowBackIcon from 'shared/assets/svg/arrow_back.svg?react';
import InfoIcon from 'shared/assets/svg/info.svg?react';
import {Button} from "shared/ui/button";
import s from './RegistrationPage.module.scss';


type Props = {}

export function RegistrationPage({}: Props) {
    return (
        <div className={s._}>
            <h2 className={s.title}>Регистрация</h2>

            <div className={s.tabs}>
                <Button className={s.btn_info}>Полная <InfoIcon/></Button>
                <Button theme={'grey'}>Упрощенная</Button>
            </div>

            <RegistrationForm/>

            <Link to={'/'} className={s.btn_home}>
                <Button theme={'white'}>
                    <ArrowBackIcon/>
                    Вернуться на главную
                </Button>
            </Link>
        </div>
    );
}
