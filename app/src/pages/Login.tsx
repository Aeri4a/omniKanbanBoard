import { FC, useState } from "react";
import { Typography } from "@mui/material";

import { LoginPayload } from "../types/common";
import {
    StyledContainer,
    StyledTextField,
    StyledLoadingButton,
} from "./Login.styles";
import { useDispatch } from "../store";
import { userActions } from "../store/slices/User";
import { toast } from "react-toastify";

const loginDataDefault: LoginPayload = {
    username: "",
    password: "",
};

const Login: FC = () => {
    const dispatch = useDispatch();
    const [loginData, setLoginData] = useState<LoginPayload>(loginDataDefault);

    const handleInputChange = (e) => {
        setLoginData((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = () => {
        dispatch(userActions.getAuthenticate(loginData)).then(() => {
            toast.success("Login success!");
        });
    };

    return (
        <StyledContainer>
            <Typography
                variant="h2"
                color="primary"
                sx={{ marginBottom: "70px" }}
            >
                Omni Kanban Board
            </Typography>
            <StyledTextField
                placeholder="Username"
                value={loginData.username}
                name="username"
                onChange={handleInputChange}
                variant="outlined"
                required={true}
                sx={{
                    input: {
                        color: "white",
                        fontSize: "30px",
                        textAlign: "center",
                    },
                }}
            />
            <StyledTextField
                placeholder="Password"
                value={loginData.password}
                name="password"
                onChange={handleInputChange}
                type="password"
                required={true}
                sx={{
                    input: {
                        color: "white",
                        fontSize: "30px",
                        textAlign: "center",
                    },
                }}
            />
            <StyledLoadingButton
                type="submit"
                variant="contained"
                onClick={handleSubmit}
            >
                Login
            </StyledLoadingButton>
        </StyledContainer>
    );
};

export default Login;
