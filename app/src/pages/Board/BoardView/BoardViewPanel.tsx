import { FC, useState, useEffect } from 'react';
import { ContentBox, StyledBox, TaskAddBox } from './BoardViewPanel.styles';
import AddIcon from '@mui/icons-material/Add';
import { Dialog, DialogContent, SelectChangeEvent } from '@mui/material';
import TaskModal from '../../../components/TaskModal';
import { TaskDTO } from '../../../types/common';
import { useDispatch } from '../../../store';
import { taskActions } from '../../../store/slices/Task';
import { toast } from 'react-toastify';

const initalTaskEditForm: TaskDTO = {
    title: '',
    description: '',
    userId: null
}

const BoardViewPanel: FC = () => {
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskEditForm, setTaskEditForm] = useState<TaskDTO>(initalTaskEditForm);

    const handleEditTaskTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskEditForm(state => ({ ...state, title: e.target.value }));
    }

    const handleEditTaskDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskEditForm(state => ({ ...state, description: e.target.value }));
    }

    const handleEditTaskUser = (e: SelectChangeEvent) => {
        setTaskEditForm(state => ({ ...state, userId: e.target.value }));
    }

    const handleCreateTask = () => {
        dispatch(taskActions.createTask(taskEditForm))
            .unwrap()
            .then(() => {
                toast.success("Created task");
            })
            .catch(() => {
                toast.error("Error while creatign task");
            })
            .finally(() => {
                setTaskEditForm(initalTaskEditForm);
            })

        handleCloseModal();
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <StyledBox>
            <Dialog
                open={isModalOpen}
                onClose={handleCloseModal}
                fullWidth
                maxWidth="md"
            >
                <DialogContent>
                    <TaskModal
                        isEdit={false}
                        onClose={handleCloseModal}
                        title={taskEditForm.title ?? ''}
                        description={taskEditForm.description ?? ''}
                        userId={taskEditForm.userId}
                        handleTitleChange={handleEditTaskTitle}
                        handleDescriptionChange={handleEditTaskDesc}
                        handleUserChange={handleEditTaskUser}
                        handleSave={handleCreateTask}
                    />
                </DialogContent>
            </Dialog>
            <ContentBox>
                <TaskAddBox onClick={() => setIsModalOpen(true)}>
                    <AddIcon/> Add task
                </TaskAddBox>
            </ContentBox>
        </StyledBox>
    );
}

export default BoardViewPanel;