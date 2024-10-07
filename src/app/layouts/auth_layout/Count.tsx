import s from "./AuthLayout.module.scss";


type Props = {
    count: number
    text: string
}

export function Count({count, text}: Props) {
    return (
        <div className={s.count}>
            <p className={s.count__count}>{count}</p>
            <p className={s.count__text}>{text}</p>
        </div>
    );
}
