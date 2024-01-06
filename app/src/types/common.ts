
export interface Team {
    id: number | null;
    name: string | null;
    inviteCode: string | null;
}

export interface User {
    id: number | null;
    username: string | null;
    team: Team | null;
}

export interface LoginPayload {
    username: string;
    password: string;
}

export interface JwtToken {
    token: string;
}

export interface InviteCodeDTO {
    inviteCode: string;
}