import { FC, useEffect, useState } from "react";
import { MainTable, StatusTile, StatusTileHeader, TaskTile, TaskTileFooter, TaskTileHeader } from "./BoardViewTable.styles";
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch, useSelector } from "../../../store";
import { taskActions, taskSelector } from "../../../store/slices/Task";
import { Task, TaskDTO, TaskStatus } from "../../../types/common";
import { Dialog, DialogContent } from "@mui/material";
import TaskModal from "../../../components/TaskModal";
import { SelectChangeEvent } from "@mui/material";
import { toast } from "react-toastify";

interface FilteredTasks {
    assigned: Task[];
    inprogress: Task[];
    codereview: Task[];
    testing: Task[];
    done: Task[];
}

const initialFilteredTasks: FilteredTasks = {
    assigned: [],
    inprogress: [],
    codereview: [],
    testing: [],
    done: []
}

const BoardViewTable: FC = () => {
    const dispatch = useDispatch();
    const { tasks } = useSelector(taskSelector);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filteredTasks, setFilteredTasks] = useState<FilteredTasks>(initialFilteredTasks);
    const [taskEditForm, setTaskEditForm] = useState<TaskDTO>();

    const filterTasks = () => {
        const newFilteredTasks = {
            assigned: [],
            inprogress: [],
            codereview: [],
            testing: [],
            done: []
        };

        tasks.forEach(task => {
            if (task.status === TaskStatus.ASSIGNED)
                newFilteredTasks.assigned.push(task);
            if (task.status === TaskStatus.IN_PROGRESS)
                newFilteredTasks.inprogress.push(task);
            if (task.status === TaskStatus.CODE_REVIEW)
                newFilteredTasks.codereview.push(task);
            if (task.status === TaskStatus.TESTING)
                newFilteredTasks.testing.push(task);
            if (task.status === TaskStatus.DONE)
                newFilteredTasks.done.push(task);
        });
        setFilteredTasks(newFilteredTasks);
    }

    const handleEditTask = (taskId: number) => {
        const choosedTask = tasks.find((task) => task.id == taskId);
        setTaskEditForm({
            id: choosedTask?.id,
            title: choosedTask?.title,
            description: choosedTask?.description,
            status: choosedTask?.status,
            userId: choosedTask?.user?.id
        });
        setIsModalOpen(true);
    }

    const handleEditTaskTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskEditForm(state => ({ ...state, title: e.target.value }));
    }

    const handleEditTaskDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskEditForm(state => ({ ...state, description: e.target.value }));
    }

    const handleEditTaskUser = (e: SelectChangeEvent) => {
        setTaskEditForm(state => ({ ...state, userId: e.target.value}));
    }

    const handleEditTaskStatus = (e: SelectChangeEvent) => {
        setTaskEditForm(state => ({ ...state, status: e.target.value }));
    }

    const handleFormSubmit = () => {
        if (taskEditForm)
            dispatch(taskActions.updateTask(taskEditForm))
                .unwrap()
                .then(() => {
                    toast.success("Saved task");
                })
                .catch(() => {
                    toast.error("Error while saving task");
                })
        handleCloseModal();
    }

    const handleFormDelete = () => {
        if (taskEditForm)
            dispatch(taskActions.deleteTask(taskEditForm.id as number))
                .unwrap()
                .then(() => {
                    toast.success("Deleted task");
                })
                .catch(() => {
                    toast.error("Error while deleting task");
                });
        handleCloseModal();
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    useEffect(() => {
        dispatch(taskActions.getTasksByTeam());
    }, []);
    
    useEffect(() => {
        filterTasks();
    }, [tasks]);
    
    return (
        <MainTable>
            <Dialog
                open={isModalOpen}
                onClose={handleCloseModal}
                fullWidth
                maxWidth="md"
            >
                <DialogContent>
                    <TaskModal
                        isEdit={true}
                        title={taskEditForm?.title ?? ''}
                        description={taskEditForm?.description ?? ''}
                        userId={taskEditForm?.userId ?? NaN}
                        status={taskEditForm?.status ?? ''}
                        onClose={handleCloseModal}
                        handleSave={handleFormSubmit}
                        handleDelete={handleFormDelete}
                        handleTitleChange={handleEditTaskTitle}
                        handleDescriptionChange={handleEditTaskDesc}
                        handleUserChange={handleEditTaskUser}
                        handleStatusChange={handleEditTaskStatus}
                    />
                </DialogContent>
            </Dialog>
            <StatusTile>
                <StatusTileHeader>Assigned</StatusTileHeader>
                
                {filteredTasks.assigned.map(task => (
                    <TaskTile key={task.id} onClick={() => { handleEditTask(task.id as number) }}>
                        <TaskTileHeader>{task.title}</TaskTileHeader>
                        <TaskTileFooter>
                            <PersonIcon/> {task.user?.username}
                        </TaskTileFooter>
                    </TaskTile>
                ))}

            </StatusTile>
            <StatusTile>
                <StatusTileHeader>In progress</StatusTileHeader>

                {filteredTasks.inprogress.map(task => (
                    <TaskTile key={task.id} onClick={() => { handleEditTask(task.id as number) }}>
                        <TaskTileHeader>{task.title}</TaskTileHeader>
                        <TaskTileFooter>
                            <PersonIcon/> {task.user?.username}
                        </TaskTileFooter>
                    </TaskTile>
                ))}
            </StatusTile>
            <StatusTile>
                <StatusTileHeader>Code review</StatusTileHeader>

                {filteredTasks.codereview.map(task => (
                    <TaskTile key={task.id} onClick={() => { handleEditTask(task.id as number) }}>
                        <TaskTileHeader>{task.title}</TaskTileHeader>
                        <TaskTileFooter>
                            <PersonIcon/> {task.user?.username}
                        </TaskTileFooter>
                    </TaskTile>
                ))}

            </StatusTile>
            <StatusTile>
                <StatusTileHeader>Testing</StatusTileHeader>

                {filteredTasks.testing.map(task => (
                    <TaskTile key={task.id} onClick={() => { handleEditTask(task.id as number) }}>
                        <TaskTileHeader>{task.title}</TaskTileHeader>
                        <TaskTileFooter>
                            <PersonIcon/> {task.user?.username}
                        </TaskTileFooter>
                    </TaskTile>
                ))}

            </StatusTile>
            <StatusTile>
                <StatusTileHeader>Done</StatusTileHeader>

                {filteredTasks.done.map(task => (
                    <TaskTile key={task.id} onClick={() => { handleEditTask(task.id as number) }}>
                        <TaskTileHeader>{task.title}</TaskTileHeader>
                        <TaskTileFooter>
                            <PersonIcon/> {task.user?.username}
                        </TaskTileFooter>
                    </TaskTile>
                ))}

            </StatusTile>
        </MainTable>
    )
}

export default BoardViewTable;