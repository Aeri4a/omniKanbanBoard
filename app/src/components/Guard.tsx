import { FC } from "react"

import { Container } from "@mui/material"

import BroadBrowse from "../pages/Board/BoardBrowse"
import Login from "../pages/Login"
import useAuth from "../hooks/useAuth"


const Guard: FC = () => {
    const { user: { authenticated } } = useAuth();


    return (
        <Container>
            {authenticated
                ? <BroadBrowse/>
                : <Login/>
            }
        </Container>
    )
}

export default Guard;