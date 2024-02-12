import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPannel from "../Screens/AuthScreen/Login";
import SignUpPannel1 from "../Screens/AuthScreen//SignUp1";
import SignUpPannel2 from "../Screens/AuthScreen//SignUp2";
import SignUpPannel3 from "../Screens/AuthScreen//SignUp3";
import ForgotPass1 from "../Screens/AuthScreen//ForgotPass1";
import ForgotPass2 from "../Screens/AuthScreen//ForgotPass2";
import Pagebackground from "../components/Pagebackground";
import VerificationScreen from "../Screens/AuthScreen/Verfication";

const AuthRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPannel />} />
        <Route path="/signup" element={<SignUpPannel1 />} />
        <Route path="/signup$" element={<SignUpPannel2 />} />
        <Route path="/confirmation" element={<SignUpPannel3 />} />
        <Route path="/forgotpassword" element={<ForgotPass1 />} />
        <Route path="/accountrecover" element={<ForgotPass2 />} />
        <Route path="/verification" element={<VerificationScreen />} />
      </Routes>

      <Pagebackground />
    </div>
  );
};

export default AuthRoute;
