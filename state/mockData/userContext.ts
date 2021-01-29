import { UserContext } from "../../interfaces";

export const mockUserContext: UserContext = {
    authenticated: false,
    userId: "101",
    user: { id: "101", name: "Hajar Boughoula", receivedBid: true, preferenced: true },
    userName: "Hajar Boughoula",
    token: "",
    refreshToken: ""
}