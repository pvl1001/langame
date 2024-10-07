import {Menu} from "pages/home/ui/menu/ui/Menu.tsx";
import {User} from "shared/ui/user";
import {score, session, slides, status, tariffs, user} from "../lib/data.ts";
import s from "./HomePage.module.scss";
import {Score} from "./score";
import {Session} from "./session";
import {Slider} from "./slider";
import {Status} from "./status";
import {Tariffs} from "./tariffs";


type Props = {}

export function HomePage({}: Props) {
    return (
        <div className={s._}>
            <div className={s.grid}>
                <User
                    name={user.name}
                    avatarSrc={user.avatar}
                />

                <Status
                    status={status.status}
                    date={status.date}
                />

                <Tariffs tariffs={tariffs}/>

                <Session
                    title={session.title}
                    minutes={session.minutes}
                    expires={session.expires}
                />

                <Score
                    mainScore={score.mainScore}
                    bonusScore={score.bonusScore}
                />

                <Slider slides={slides}/>

                <Slider slides={slides.toReversed()}/>
            </div>

            <Menu className={s.menu}/>
        </div>
    );
}
