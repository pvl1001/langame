import s from "./User.module.scss";


type Props = {
    name: string
    avatarSrc: string
}

export function User({name, avatarSrc}: Props) {
    return (
        <div className={s._}>
            <img className={s.img} src={avatarSrc} alt="user avatar"/>
            <p className={s.name}>{name}</p>
        </div>
    );
}
