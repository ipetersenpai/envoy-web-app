import React, { useState } from "react";
import { createContext } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [LoginAccess, setLoginAccess] = useState(false);

  //ERROR TRIGGER FOR TEXTFIELD NI SYA
  const [LoginValidation, setLoginValidation] = useState("");
  const [open, setOpen] = useState(false);

  //SA LOG IN SCREEN NI SYA
  const LoginRequest = (email, password) => {
    let tem_email = "admin@sample.com";
    let tem_password = "admin123";

    if (tem_email === email && tem_password === password) {
      setLoginAccess(true);
      setLoginValidation("");
      setOpen(false);
    } else if (tem_email === email && tem_password !== password) {
      setLoginValidation("The password you entered is Incorrect.");
      setOpen(true);
    } else if (tem_email !== email) {
      setLoginValidation("The email does not match to any account.");
      setOpen(true);
    } else if (tem_password !== password) {
      setLoginValidation("The password you entered is Incorrect.");
      setOpen(true);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        LoginAccess,
        LoginRequest,
        LoginValidation,
        open,
        setOpen,
        setLoginAccess,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
