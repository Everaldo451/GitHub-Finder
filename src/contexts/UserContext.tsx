import { createContext, SetStateAction } from "react";
import { UserType } from "../Types";
export const UserContext = createContext<[UserType|null, React.Dispatch<SetStateAction<UserType|null>>]>([null, () => {}])