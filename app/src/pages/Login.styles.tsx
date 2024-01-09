import { LoadingButton } from "@mui/lab";
import { Container, TextField } from "@mui/material"
import styled from "styled-components"

export const StyledContainer = styled(Container)`
    && {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const StyledTextField = styled(TextField)`
    &&  {
        width: 300px;
        border-radius: 5px;
        margin-bottom: 20px;
    }
`;

export const StyledLoadingButton = styled(LoadingButton)`
    && {
        width: 300px;        
        border-radius: 5px;
    }
`