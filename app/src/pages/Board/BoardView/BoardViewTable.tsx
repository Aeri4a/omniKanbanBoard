import { FC, useEffect, useState } from "react";
import { MainTable, StatusTile, StatusTileHeader, TaskTile, TaskTileFooter, TaskTileHeader } from "./BoardViewTable.styles";
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch, useSelector } from "../../../store";
import { taskActions, taskSelector } from "../../../store/slices/Task";
import { Task, TaskStatus } from "../../../types/common";

interface FilteredTasks {
    assigned: Task[];
    inprogress: Task[];
    codereview: Task[];
    testing: Task[];
    done: Task[];
}

const initialFilteredTasks = {
    assigned: [],
    inprogress: [],
    codereview: [],
    testing: [],
    done: []
}

const BoardViewTable: FC = () => {
    const dispatch = useDispatch();
    const { tasks, loading } = useSelector(taskSelector);

    const [filteredTasks, setFilteredTasks] = useState<FilteredTasks>(initialFilteredTasks);


    const filterTasks = () => {
        const newFilteredTasks = initialFilteredTasks;
        tasks.forEach(task => {
            if (task.status === TaskStatus.ASSIGNED) newFilteredTasks.assigned.push(task);
            if (task.status === TaskStatus.IN_PROGRESS) newFilteredTasks.inprogress.push(task);
            if (task.status === TaskStatus.CODE_REVIEW) newFilteredTasks.codereview.push(task);
            if (task.status === TaskStatus.TESTING) newFilteredTasks.testing.push(task);
            if (task.status === TaskStatus.DONE) newFilteredTasks.done.push(task);
        });

        setFilteredTasks(newFilteredTasks);
    }

    useEffect(() => {
        dispatch(taskActions.getTasksByTeam());
    }, []);

    useEffect(() => {
        filterTasks();
    }, [tasks]);
    
    return (
        <MainTable>
            <StatusTile>
                <StatusTileHeader>Assigned</StatusTileHeader>
                
                {filteredTasks.assigned.map(task => (
                    <TaskTile key={task.id}>
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
                    <TaskTile key={task.id}>
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
                    <TaskTile key={task.id}>
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
                    <TaskTile key={task.id}>
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
                    <TaskTile key={task.id}>
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