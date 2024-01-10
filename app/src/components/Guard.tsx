import { FC, useEffect } from "react"

import BroadBrowse from "../pages/Board/BoardBrowse"
import Login from "../pages/Login"
import useAuth from "../hooks/useAuth"
import { userActions, userSelector } from "../store/slices/User"
import { useDispatch, useSelector } from "../store"

const Guard: FC = () => {
    const dispatch = useDispatch();
    const userState = useSelector(userSelector);
    const { user: { isAuthenticated } } = useAuth();

    useEffect(() => {
        if (!isAuthenticated)
            dispatch(userActions.verifyToken(userState));
    }, []);

    useEffect(() => {
    }, [isAuthenticated]);

    return (
        <>
            {isAuthenticated
                ? <BroadBrowse/>
                : <Login/>
            }
        </>
    )
}

export default Guard;