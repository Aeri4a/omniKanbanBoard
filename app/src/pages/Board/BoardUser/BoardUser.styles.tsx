import { Box } from "@mui/material";
import styled from "styled-components";


export const StyledBox = styled(Box)`
    && {
        display: flex;
        flex-direction: column;
        flex: 2;
        align-items: center;
        justify-content: flex-start;

        padding: 10px;

        background-color: #313131;

    }
`

export const ModalContainer = styled(Box)`
    && {
        display: flex;
        flex-direction: row;

        width: 700px;
        height: 500px;
        background-color: grey;
    }
`;

export const TileHeader = styled(Box)`
    && {
        display: flex;
        justify-content: space-between;
        width: 90%;
        heigth: 70px;
        
        border-radius: 10px;
        padding: 5px 15px 5px 15px;
        margin: 5px;
        background-color: white;
        color: #242424;
    }
`;
