import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { Location } from "react-router-dom";

type ProviderProps = {
  children: ReactNode;
};
type User = {
  username: string;
  email: string;
  pass: string;
};
type AuthContextType = {
  user: User | null;
  login: (userdata: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem("userData");
      return saved ? (JSON.parse(saved) as User) : null;
    } catch {
      return null;
    }
  });

  const location = useLocation() as Location & { state?: { from?: string } };
  const navigate = useNavigate();
  const from = location.state?.from || "/dashboard";

  const login = (userData: User) => {
    setUser(userData);
    navigate(from, { replace: false });
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("userData");
    navigate("/login", { replace: false });
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
