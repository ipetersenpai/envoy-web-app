import React from "react";
import { createContext } from "react";

export const UpdateProfileContext = createContext();

export const UpdateProfileProvider = ({ children }) => {
  const UpdateUserData = (
    newfullname,
    newemail,
    newdepartment,
    newposition,
    newpassword
  ) => {
    if (newfullname !== "") {
      console.log("New user data = ", newfullname);
    } else if (newemail !== "") {
      console.log("New user data = ", newemail);
    } else if (newdepartment !== "") {
      console.log("New user data = ", newdepartment);
    } else if (newposition !== "") {
      console.log("New user data = ", newposition);
    } else if (newpassword !== "") {
      console.log("New user data = ", newpassword);
    }
  };
  return (
    <UpdateProfileContext.Provider value={{ UpdateUserData }}>
      {children}
    </UpdateProfileContext.Provider>
  );
};
