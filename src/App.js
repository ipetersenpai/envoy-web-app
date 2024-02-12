import React from "react";
import NavigationRoute from "./NavigationComponent/NavigationRoute";
import { AuthenticationProvider } from "./Context/AuthContext";
import { ForgotPasswordProvider } from "./Context/ForgotPasswordContext";
import { SignUpProvider } from "./Context/SignUpContext";
import { UpdateProfileProvider } from "./Context/UpdateProfile";

function App() {
  return (
    <UpdateProfileProvider>
      <SignUpProvider>
        <ForgotPasswordProvider>
          <AuthenticationProvider>
            <NavigationRoute />
          </AuthenticationProvider>
        </ForgotPasswordProvider>
      </SignUpProvider>
    </UpdateProfileProvider>
  );
}

export default App;
