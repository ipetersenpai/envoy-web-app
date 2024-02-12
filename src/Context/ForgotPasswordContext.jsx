import React, { useState } from "react";
import { createContext } from "react";

export const ForgotPasswordContext = createContext();

export const ForgotPasswordProvider = ({ children }) => {
  const [checkEmailValidation, setcheckEmailValidation] = useState("");
  const [open, setOpen] = useState(false);
  const [UserEmail, setUserEmail] = useState("");

  //SA LOG IN SCREEN NI SYA
  const FindEmail = (email) => {
    let tem_email = "admin@sample.com";

    if (tem_email === email) {
      setUserEmail(email);
      setcheckEmailValidation("");
      setOpen(false);
    } else if (tem_email !== email) {
      email = "";
      setcheckEmailValidation("The email does not match to any account.");
      setOpen(true);
    }
  };

  return (
    <ForgotPasswordContext.Provider
      value={{
        FindEmail,
        open,
        setOpen,
        UserEmail,
        checkEmailValidation,
      }}
    >
      {children}
    </ForgotPasswordContext.Provider>
  );
};
