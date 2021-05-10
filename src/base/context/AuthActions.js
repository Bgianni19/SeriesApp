import { auth } from "../base";

export const signup = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const login = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};
