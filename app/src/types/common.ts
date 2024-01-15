
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

export interface Task {
    id: number | null;
    title: string | null;
    description: string | null;
    status: string | null;
    user: User | null;
}

export enum TaskStatus {
    ASSIGNED = 'ASSIGNED',
    IN_PROGRESS = 'IN_PROGRESS',
    CODE_REVIEW = 'CODE_REVIEW',
    TESTING = 'TESTING',
    DONE = 'DONE'
}

//---------------------------------

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

export interface TaskDTO {
    id: number | null;
    title: string | null;
    description: string | null;
    status: string | null;
    userId: number | null;
}