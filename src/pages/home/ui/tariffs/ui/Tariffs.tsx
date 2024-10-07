import {Container} from "shared/ui/container";
import s from "./Tariffs.module.scss";


type Props = {
    tariffs: Record<string, string>
}

export function Tariffs({tariffs}: Props) {
    return (
        <Container className={s._}>
            <h5 className={s.title}>
                Тарифы, доступные на данном ПК
            </h5>

            <ul className={s.list}>
                {Object.keys(tariffs).map(key => {
                    const value: string = tariffs[key as keyof typeof tariffs];
                    return (
                        <li key={key} className={s.item}>
                            <p className={s.key}>{key}</p>
                            <p className={s.value}>{value} ₽</p>
                        </li>
                    );
                })}
            </ul>
        </Container>
    );
}
