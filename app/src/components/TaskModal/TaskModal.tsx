import { FC, useEffect } from "react";
import { Container, LeftSection, RightSection } from "./TaskModal.styles";
import {
    Button,
    DialogActions,
    FormControl,
    Input,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import { useDispatch, useSelector } from "../../store";
import { userActions, userSelector } from "../../store/slices/User";
import { TaskStatus } from "../../types/common";

interface TaskModalProps {
    title: string;
    description: string;
    userId: number;
    status?: string;
    handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDescriptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleUserChange: (e: SelectChangeEvent) => void;
    handleStatusChange?: (e: SelectChangeEvent) => void;

    handleDelete?: () => void;
    handleSave: () => void;
    onClose: () => void;

    isEdit: boolean;
}

const TaskModal: FC<TaskModalProps> = ({
    isEdit,
    title,
    description,
    userId,
    status,
    handleTitleChange,
    handleDescriptionChange,
    handleUserChange,
    handleStatusChange,
    handleDelete,
    handleSave,
    onClose
}) => {
    const dispatch = useDispatch();
    const { users } = useSelector(userSelector);

    useEffect(() => {
        dispatch(userActions.getUsersByTeam());
    }, []);

    return (
        <Container>
            <LeftSection>
                <Input value={title} onChange={handleTitleChange} />
                Title
                <TextField
                    multiline={true}
                    minRows={8}
                    variant="outlined"
                    sx={{ width: "500px", marginTop: "15px" }}
                    value={description}
                    onChange={handleDescriptionChange}
                />
                Description
            </LeftSection>
            <RightSection>
                <FormControl>
                    <InputLabel
                        sx={{ marginTop: "68px" }}
                        id="task-modal-label"
                    >
                        User
                    </InputLabel>
                    <Select
                        labelId="task-modal-label"
                        label="User"
                        sx={{ width: "250px", marginTop: "68px" }}
                        // disabled={!isEdit}
                        value={userId}
                        onChange={handleUserChange}
                    >
                        {users?.map((user) => (
                            <MenuItem key={user.id} value={user.id}>{user.username}</MenuItem>
                        ))}
                    </Select>
                    </FormControl>
                    <FormControl>
                    <InputLabel
                        sx={{ marginTop: "20px" }}
                        id="status-modal-label"
                    >
                        Status
                    </InputLabel>
                    <Select
                        labelId="status-modal-label"
                        label="Status"
                        sx={{ width: "250px", marginTop: '20px' }}
                        disabled={!isEdit}
                        value={status}
                        onChange={handleStatusChange}
                    >
                        <MenuItem value={TaskStatus.ASSIGNED}>{TaskStatus.ASSIGNED}</MenuItem>
                        <MenuItem value={TaskStatus.IN_PROGRESS}>{TaskStatus.IN_PROGRESS}</MenuItem>
                        <MenuItem value={TaskStatus.CODE_REVIEW}>{TaskStatus.CODE_REVIEW}</MenuItem>
                        <MenuItem value={TaskStatus.TESTING}>{TaskStatus.TESTING}</MenuItem>
                        <MenuItem value={TaskStatus.DONE}>{TaskStatus.DONE}</MenuItem>
                    </Select>
                </FormControl>
                <DialogActions>
                    <Button variant="contained" onClick={onClose}>Close</Button>
                    {isEdit ? (
                        <>
                            <Button variant="contained" onClick={handleDelete}>Delete</Button>
                            <Button variant="contained" onClick={handleSave}>Save</Button>
                        </>
                    ) : (
                        <Button variant="contained" onClick={handleSave}>Create</Button>
                    )}
                </DialogActions>
            </RightSection>
        </Container>
    );
};

export default TaskModal;
