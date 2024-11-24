import useAuth from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (user != null && user.token != null) return children;
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
