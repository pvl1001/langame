import {AuthLayout, Layout} from "app/layouts";
import {LogInPage, RegistrationPage} from "pages/auth";
import {HomePage} from "pages/home/ui/HomePage.tsx";
import {createHashRouter} from "react-router-dom";
import {Paths} from "shared/lib/Paths";
import {ErrorBoundary} from "shared/ui/error_boundary";


export const router = createHashRouter([
    {
        errorElement: <ErrorBoundary/>,
        children: [
            {
                Component: Layout,
                children: [
                    {
                        path: '/',
                        Component: HomePage,
                    }
                ]
            },
            {
                Component: AuthLayout,
                children: [
                    {
                        path: Paths.LOGIN,
                        element: <LogInPage/>,
                    },
                    {
                        path: Paths.REGISTRATION,
                        element: <RegistrationPage/>,
                    },
                ]
            },

        ]
    }
]);
