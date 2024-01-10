import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../../store";
import { userActions, userSelector } from "../../../store/slices/User";
import { ModalContainer, StyledBox, TileHeader } from "./BoardUser.styles";
import { Button, Modal, Typography } from "@mui/material";

const BroadUser = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(userSelector);

    const hasUserTeam = Boolean(user.team);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getUserData = () => {
        dispatch(userActions.getCurrentUser());
    };

    const handleLogout = () => {
        dispatch(userActions.removeTokenFromLS());
        location.reload();
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        getUserData();
    }, []);

    // useEffect(() => {
    // }, [user]); // check if its necessary

    const noTeamButton = () => (
        <>
            <Button variant="contained" onClick={() => setIsModalOpen(true)}>
                Create team
            </Button>
            <Button variant="contained">Join team</Button>
        </>
    );

    const existTeamButton = () => (
        <>
            <Button variant="contained">Leave team</Button>
        </>
    );

    return (
        <StyledBox>
            <Modal open={isModalOpen} onClose={handleModalClose}>
                <ModalContainer>x</ModalContainer>
            </Modal>
            <Button fullWidth variant="contained" onClick={handleLogout} color="secondary">
                Logout
            </Button>
            <TileHeader>
                <Typography variant="h5">User:</Typography>
                <Typography variant="h5">{user.username}</Typography>
            </TileHeader>

            <TileHeader>
                <Typography variant="h5">Team</Typography>
                <Typography variant="h5">
                    {hasUserTeam ? user.team?.name : "No team"}
                </Typography>
            </TileHeader>
            {hasUserTeam ? existTeamButton() : noTeamButton()}
        </StyledBox>
    );
};

export default BroadUser;
