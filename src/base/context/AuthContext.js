import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../base";
import { signup, login } from "./AuthActions";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const value = { currentUser, signup, login };

  useEffect(() => {
    const unsibscribe = auth.onAuthStateChanged((user) => setCurrentUser(user));
    return unsibscribe;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
