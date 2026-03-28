import { AuthenticateUser } from "./authenticate.user";

export type Loggeduser = Omit<AuthenticateUser, 'password'> & {
    firstName: string,
    lastName: string,
    token: string
};