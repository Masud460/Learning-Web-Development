import { useAuth } from "../../hooks";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}) {
  const { user } = useAuth();
    if (!user) {
      return <Navigate to="/login" replace/>;
    } 
  return children
}

export default ProtectedRoute;
