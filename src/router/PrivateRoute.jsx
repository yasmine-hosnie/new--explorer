import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
