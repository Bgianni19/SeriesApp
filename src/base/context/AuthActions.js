import { auth } from "../base";

export const signup = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};
