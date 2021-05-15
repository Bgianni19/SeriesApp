import { auth } from '../base';

export const signupAuth = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const loginAuth = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const logoutAuth = () => {
  return auth.signOut();
};

export const forgotPasswordAuth = (email) => {
  return auth.sendPasswordResetEmail(email);
};
