import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children, login }) => {
  return login ? children : <Navigate to="/login" replace />;
};
