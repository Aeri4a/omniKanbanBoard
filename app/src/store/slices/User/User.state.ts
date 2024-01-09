import { User } from "../../../types/common";

export default interface UserState {
    user: User & {
        loading: boolean;
        isAuthenticated: boolean;
    };

    users: User[] | null;
}
