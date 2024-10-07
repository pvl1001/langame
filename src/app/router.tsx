import {AuthLayout, Layout} from "app/layouts";
import {LogInPage, RegistrationPage} from "pages/auth";
import {HomePage} from "pages/home/ui/HomePage.tsx";
import {createBrowserRouter} from "react-router-dom";
import {Paths} from "shared/lib/Paths";
import {ErrorBoundary} from "shared/ui/error_boundary";


export const router = createBrowserRouter([
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
