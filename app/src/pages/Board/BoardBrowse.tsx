import { Box } from "@mui/material";
import BroadUser from "./BoardUser/BoardUser";
import BroadView from "./BoardView/BoardView";
import styled from "styled-components";

export const StyledBox = styled(Box)`
    && {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        height: 100vh;
    }
`;

const BroadBrowse = () => {
    return (
        <StyledBox>
            <BroadUser/>
            <BroadView/>
        </StyledBox>
    )
};

export default BroadBrowse;