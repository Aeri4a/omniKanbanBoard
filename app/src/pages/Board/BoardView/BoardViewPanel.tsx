import { FC } from 'react';
import { ContentBox, StyledBox, TaskAddBox } from './BoardViewPanel.styles';
import AddIcon from '@mui/icons-material/Add';

const BoardViewPanel: FC = () => {
    return (
        <StyledBox>
            <ContentBox>
                <TaskAddBox>
                    <AddIcon/> Add task
                </TaskAddBox>
            </ContentBox>
        </StyledBox>
    );
}

export default BoardViewPanel;