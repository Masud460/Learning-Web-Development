import UserContext from "../features/auth/context/userContext";
import { useContext } from "react";

function useAuth() {
  return useContext(UserContext) || {};
}
export default useAuth;
