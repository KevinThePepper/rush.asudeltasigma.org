import { User } from "./userManagement";

export type UserContext = {
    authenticated?: boolean
    userId: string
    userName: string
    user: User
    token: string
    refreshToken: string
}