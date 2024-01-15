import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../../store";
import { userActions, userSelector } from "../../../store/slices/User";
import { StyledBox, TileHeader, UpperSection } from "./BoardUser.styles";
import { Box, Button, Dialog, Typography } from "@mui/material";
import BoardUserCT from "./BoardUserCT";
import { toast } from "react-toastify";
import BoardUserJT from "./BoardUserJT";

enum ModalMode {
    CREATE_TEAM = "createTeam",
    JOIN_TEAM = "joinTeam",
}

interface ModalStatus {
    open: boolean;
    mode: ModalMode | undefined;
}

const BroadUser = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(userSelector);

    const hasUserTeam = Boolean(user.team);
    const [modalStatus, setModalStatus] = useState<ModalStatus>({
        open: false,
        mode: undefined,
    });

    const [formTeamName, setFormTeamName] = useState("");
    const [formCodeInvite, setFormCodeInvite] = useState("");

    const getUserData = () => {
        dispatch(userActions.getCurrentUser());
    };

    const handleLogout = () => {
        dispatch(userActions.removeTokenFromLS());
        location.reload();
    };

    const handleModalClose = () => {
        setModalStatus((state) => ({ ...state, open: false }));
    };

    const handleTeamCreate = () => {
        dispatch(userActions.createTeam({ name: formTeamName }))
            .unwrap()
            .then(() => {
                handleModalClose();
                toast.success("Created team");
            })
            .catch(() => {
                handleModalClose();
                toast.error("Error while creating team");
            })
            .finally(() => {
                getUserData();
            });
    };

    const handleJoinTeam = () => {
        dispatch(userActions.joinTeam({ inviteCode: formCodeInvite }))
            .unwrap()
            .then(() => {
                handleModalClose();
                toast.success("Joined to team");
            })
            .catch(() => {
                handleModalClose();
                toast.error("Error while joining team");
            })
            .finally(() => {
                getUserData();
            });
    };

    const handleCodeCopy = () => {
        navigator.clipboard.writeText(user.team?.inviteCode ?? '')
        toast.info("Copied invite code to clipboard");
    }

    useEffect(() => {
        getUserData();
    }, []);

    // useEffect(() => {
    // }, [user]); // check if its necessary

    const noTeamButton = () => (
        <Box>
            <Button
                variant="contained"
                sx={{ marginRight: "15px" }}
                onClick={() =>
                    setModalStatus({ open: true, mode: ModalMode.CREATE_TEAM })
                }
            >
                Create team
            </Button>
            <Button
                variant="contained"
                onClick={() =>
                    setModalStatus({ open: true, mode: ModalMode.JOIN_TEAM })
                }
            >
                Join team
            </Button>
        </Box>
    );

    const existTeamButton = () => (
        <>  
        <TileHeader>
            <Typography variant="h6">
                Invite code
            </Typography>
            <Button sx={{ color: 'grey' }} onClick={handleCodeCopy}>
                {user.team?.inviteCode}
            </Button>
        </TileHeader>
        <Button variant="contained">Leave team</Button>
        </>
    );

    return (
        <StyledBox>
            <Dialog
                open={modalStatus.open}
                onClose={handleModalClose}
                fullWidth
            >
                {modalStatus.mode === ModalMode.CREATE_TEAM ? (
                    <BoardUserCT
                        handleClose={handleModalClose}
                        teamName={formTeamName}
                        handleTeamNameChange={(e) => {
                            setFormTeamName(e.target.value);
                        }}
                        handleTeamCreate={handleTeamCreate}
                    />
                ) : (
                    <BoardUserJT
                        handleClose={handleModalClose}
                        inviteCode={formCodeInvite}
                        handleInviteCodeChange={(e) => {
                            setFormCodeInvite(e.target.value);
                        }}
                        handleTeamJoin={handleJoinTeam}
                    />
                )}
            </Dialog>
            <UpperSection>
                <TileHeader>
                    <Typography variant="h5">User</Typography>
                    <Typography variant="h6">{user.username}</Typography>
                </TileHeader>

                <TileHeader>
                    <Typography variant="h5">Team</Typography>
                    <Typography variant="h6">
                        {hasUserTeam ? user.team?.name : "No team"}
                    </Typography>
                </TileHeader>
                {hasUserTeam ? existTeamButton() : noTeamButton()}
            </UpperSection>
            <Button
                fullWidth
                variant="contained"
                onClick={handleLogout}
                color="secondary"
            >
                Logout
            </Button>
        </StyledBox>
    );
};

export default BroadUser;
