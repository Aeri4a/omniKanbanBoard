import { User } from "../../../types/common";

export default interface UserState {
    user: User & {
        loading: boolean;
        authenticated: boolean;
    };

    users: User[] | null;
}
