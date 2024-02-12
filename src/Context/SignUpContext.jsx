import React from "react";
import { createContext } from "react";

export const SignUpContext = createContext();

export const SignUpProvider = ({ children }) => {
  const signupData = {
    fullname: "",
    email: "",
    department: "",
    position: "",
    password: "",
  };

  return (
    <SignUpContext.Provider
      value={{
        signupData,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
