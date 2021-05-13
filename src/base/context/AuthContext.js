import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../base";
import { signup, login, logout, forgotPassword } from "./AuthActions";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const value = { currentUser, signup, login, logout, forgotPassword };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setCurrentUser(user));
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
