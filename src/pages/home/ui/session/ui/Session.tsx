import {Container} from "shared/ui/container";
import s from "./Session.module.scss";


type Props = {
    title: string
    minutes: string
    expires: string
}

export function Session({title, minutes, expires}: Props) {
    return (
        <Container className={s._}>
            <Container.Title className={s.title}>{title}</Container.Title>

            <div className={s.content}>
                <Container.Row
                    rowKey={'Осталось минут:'}
                    rowValue={minutes}
                />
                <Container.Row
                    rowKey={'Сессия истекает:'}
                    rowValue={expires}
                />
            </div>

        </Container>
    );
}
