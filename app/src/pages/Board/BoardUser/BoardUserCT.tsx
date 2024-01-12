import { FC } from "react";

import { DialogTitle, DialogContent, DialogActions, Typography, Input, Button } from "@mui/material"
import { DialogBox } from "./BoardUser.styles";

interface BoardUserCT {
    handleClose: () => void;
    handleTeamCreate: () => void;
    handleTeamNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    teamName: string;
}

const BoardUserCT: FC<BoardUserCT> = ({
    handleClose, handleTeamCreate, handleTeamNameChange, teamName
}) => {
    return (
        <>
            <DialogTitle>
                <Typography variant="h4">Create new team</Typography>
            </DialogTitle>
            <DialogContent>
                <DialogBox>
                    <Input
                        value={teamName}
                        onChange={handleTeamNameChange}
                    />
                    Team name
                </DialogBox>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleTeamCreate}>Create</Button>
            </DialogActions>
        </>
    )
};

export default BoardUserCT;
