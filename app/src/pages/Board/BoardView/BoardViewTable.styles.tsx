import { Box } from "@mui/material";
import styled from "styled-components";

export const MainTable = styled(Box)`
    && {
        display: grid;
        flex: 20;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        column-gap: 10px;

        padding: 10px;
    }
`;

export const StatusTile = styled(Box)`
    && {
        display: flex;
        flex-direction: column;
        flex: 1;

        padding: 5px;
        background-color: #171717;
        gap: 10px;
    }

`;

export const StatusTileHeader = styled(Box)`
    && {
        display: flex;
        width: 100%;
        height: 50px;
        align-items: center;
        justify-content: center;
        
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: 500;
        color: black;
        border-radius: 5px;
        background-color: #b0c418;
    }
`;

export const TaskTile = styled(Box)`
    && {
        display: flex;
        flex-direction: column;
        height: 100px;

        background-color: #303030;
        border-radius: 5px;
        cursor: pointer;
    }
    
    transition: 0.4s;

    &&:hover {
        background-color: #212121;
    }
`;

export const TaskTileHeader = styled.div`
    display: flex;
    align-items: flex-start;
    flex: 6;

    padding: 10px;
    font-weight: 500;
`;

export const TaskTileFooter = styled.div`
    display: flex;
    align-items: center;
    flex: 2;

    padding: 10px 10px 10px 5px;
    background-color: #212121;
    border-radius: 2px;
`;