import { Box } from "@mui/material";
import styled from "styled-components";


export const StyledBox = styled(Box)`
    && {
        display: flex;
        flex-direction: column;
        flex: 2;
        align-items: center;
        justify-content: space-between;

        padding: 10px;

        background-color: #333333;

    }
`
export const UpperSection = styled(Box)`
    && {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 5px;
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
        // margin-bottom: 15px;
        background-color: white;
        color: #242424;
    }
`;

export const DialogBox = styled(Box)`
    && {
        display: flex;
        flex-direction: column;
    }
`;
