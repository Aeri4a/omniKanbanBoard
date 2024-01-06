import { Task } from '../../../types/common';

export default interface TaskState {
    loading: boolean;
    tasks: Task[];
}