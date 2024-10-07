import {isRouteErrorResponse, useLocation, useRouteError} from "react-router-dom";


export function ErrorBoundary() {
    const error = useRouteError();
    let location = useLocation();
    console.log({error, location, NODE_ENV: process.env.NODE_ENV});

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>Oops!</h1>
                <h2>{error.status}</h2>
                <p>{error.statusText}</p>
                {error.data?.message && <p>{error.data.message}</p>}
            </div>
        );
    } else {
        return <div>Oops</div>;
    }
}
