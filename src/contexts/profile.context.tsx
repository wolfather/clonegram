import { createContext, Dispatch } from "react";
import { PROFILE_ACTION } from "../actions/profile.action";
import { User } from "../entities/user.entity";

import MainUser from '../assets/profile.stub.json';

type InitialStateProps = {
    profileData: User;
    profileDispatch: Dispatch<PROFILE_ACTION | any>;
}

export const ProfileContext = createContext<InitialStateProps>({
    profileData: MainUser,
    profileDispatch: () => null,
})