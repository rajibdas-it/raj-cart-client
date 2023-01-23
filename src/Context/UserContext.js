import React from "react";
import { createContext } from "react";

import { getAuth } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const myObj = { name: "Rajib" };
  const authInfo = { myObj };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
