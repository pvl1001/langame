import {Count} from "app/layouts/auth_layout/Count.tsx";
import {Footer} from "app/layouts/auth_layout/footer/Footer.tsx";
import {Outlet} from "react-router-dom";
import s from "./AuthLayout.module.scss";


type Props = {}

export function AuthLayout({}: Props) {
    return (
        <div className={s._}>
            <Count count={23} text={'Стандарт'}/>

            <div className={s.grid}>
                <div/>
                <div className={s.page_wrapper}>
                    <Outlet/>
                </div>
                <Footer/>
            </div>

            <div className={s.time_language}>
                <button type={'button'} className={s.language}>EN</button>
                <div className={s.time}>16:40</div>
            </div>
        </div>
    );
}
