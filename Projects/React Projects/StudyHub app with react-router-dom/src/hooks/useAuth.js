import { useContext } from "react";
import { AuthContext } from "../features/context/AuthContext";
export const useAuth = () => {
    const {user, login, logout} = useContext(AuthContext)
    return {user, login, logout};
}