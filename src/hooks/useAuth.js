import { AuthContext } from "@/components/auth-context";
import { useContext } from "react";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be use with in an AuthProvider");
  return context;
};

export default useAuth;
