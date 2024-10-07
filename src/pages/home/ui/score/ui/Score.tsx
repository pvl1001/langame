import {Button} from "shared/ui/button";
import {Container} from "shared/ui/container";
import RefreshIcon from '../svg/reflesh.svg?react';
import s from './Score.module.scss';


type Props = {
    mainScore: string
    bonusScore: string
}

export function Score({mainScore, bonusScore}: Props) {
    return (
        <Container className={s._}>
            <Container.Title>Основной счет</Container.Title>

            <button type={'button'} className={s.refresh_button}><RefreshIcon/></button>

            <div className={s.score_container}>
                <p className={s.main_score}>{mainScore} ₽</p>
                <div className={s.bonus_score}>
                    <p className={s.bonus_score__score}>{bonusScore} ₽</p>
                    <p className={s.bonus_score__text}>Бонусный счет</p>
                </div>
            </div>
            
            <Button className={s.button}>Пополнить</Button>
        </Container>
    );
}
