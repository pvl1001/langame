import {Container} from "shared/ui/container";
import s from "./Status.module.scss";


type Props = {
    status: string
    date: string
}

export function Status({status, date}: Props) {
    return (
        <Container className={s._}>
            <Container.Row
                rowKey={'Текущий статус:'}
                rowValue={status}
            />
            <Container.Row
                rowKey={'До смены статуса осталось:'}
                rowValue={date}
            />
        </Container>
    );
}
