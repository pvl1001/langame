import cn from "classnames";
import {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import CopyrightIcon from 'shared/assets/svg/COPYRIGHT.svg?react';
import {Paths} from "shared/lib/Paths.ts";
import {Sidebar} from "shared/ui/sidebar";
import s from './Layout.module.scss';


export function Layout() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.auth) {
            navigate(Paths.LOGIN);
        }
    }, [localStorage.auth]);

    return (
        <div className={cn(s._, 'wrapper')}>
            <Sidebar/>

            <main className={s.main}>
                <Outlet/>

                <div className={s.copyright__container}>
                    <CopyrightIcon className={s.copyright}/>
                </div>
            </main>

        </div>
    );
}
