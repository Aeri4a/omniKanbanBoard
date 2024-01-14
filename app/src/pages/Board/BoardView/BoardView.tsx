import BoardViewTable from "./BoardViewTable";

import { StyledBox, SectionBox } from "./BoardView.styles";
import BoardViewPanel from "./BoardViewPanel";

const BroadView = () => {
    return (
        <StyledBox>
            <SectionBox>
                <BoardViewPanel/>
                <BoardViewTable/>
            </SectionBox>
        </StyledBox>
    );
}

export default BroadView;
