import {useNavigate} from "react-router-dom";


export function useAuth() {
    const navigate = useNavigate();

    function onSubmit() {
        localStorage.auth = true;
        navigate('/');
    }

    return {onSubmit}
 }
