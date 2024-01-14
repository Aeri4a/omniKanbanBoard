import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledBox = styled(Box)`
    && {
        display: flex;
        width: 100%;
        flex: 2;
    }
`;

export const ContentBox = styled(Box)`
    && {
        display: flex;

        padding: 10px 15px;
    }
`;

export const TaskAddBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 50px;

    border-radius: 5px;
    background-color: white;
    color: black;
    font-weight: 500;
    cursor: pointer;

    transition: 0.4s;

    &:hover {
        background-color: #d1d1d1;
    }
`;