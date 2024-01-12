import { FC } from "react";

import { DialogTitle, DialogContent, DialogActions, Typography, Input, Button } from "@mui/material"
import { DialogBox } from "./BoardUser.styles";

interface BoardUserJT {
    handleClose: () => void;
    handleTeamJoin: () => void;
    handleInviteCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inviteCode: string;
}

const BoardUserJT: FC<BoardUserJT> = ({
    handleClose, handleTeamJoin, handleInviteCodeChange, inviteCode
}) => {
    return (
        <>
            <DialogTitle>
                <Typography variant="h4">Join team</Typography>
            </DialogTitle>
            <DialogContent>
                <DialogBox>
                    <Input
                        value={inviteCode}
                        onChange={handleInviteCodeChange}
                    />
                    Invite code
                </DialogBox>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleTeamJoin}>Join</Button>
            </DialogActions>
        </>
    )
};

export default BoardUserJT;
