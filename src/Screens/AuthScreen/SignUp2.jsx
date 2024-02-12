import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import * as yup from "yup";
import { Formik } from "formik";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useContext } from "react";
import { SignUpContext } from "../../Context/SignUpContext";

const SignUpPannel2 = () => {
  useEffect(() => {
    document.title = "Envoy | Sign Up";
  }, []);

  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const { signupData } = useContext(SignUpContext);

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

  const SignupSchema = yup.object().shape({
    newpassword1: yup
      .string()
      .matches(
        passwordRegex,
        "Password must be 8 characters long and contain an alphabetic character."
      )
      .required("required"),
    newpassword2: yup
      .string()
      .oneOf([yup.ref("newpassword1"), null], "Passwords must match.")
      .required("Required"),
  });

  const initialValues = {
    newpassword1: "",
    newpassword2: "",
  };
  const handleFormSubmit = (values) => {
    signupData.password = values.newpassword1;
    if (
      values.newpassword1 !== "" &&
      values.newpassword2 !== "" &&
      isChecked === true
    ) {
      console.log("redux data: ", signupData);
      navigate("/confirmation");
    } else if (
      values.newpassword1 !== "" &&
      values.newpassword2 !== "" &&
      isChecked === false
    ) {
      window.alert(
        "Please check the box if you agree the terms & conditions and the privacy policy."
      );
    }
  };

  return (
    <div className="flex absolute w-full h-[100vh] font-envoyFon bg-black bg-opacity-70">
      <div className="mx-auto bg-white 2xl:h-[565px] 2xl:w-[460px] md:w-[390px] md:h-[555px] w-[360px] h-[590px] mt-[10vh] rounded-xl shadow-2xl md:mt-[10vh] flex flex-col text-black">
        <Link to="/signup">
          <button className="h-10 w-10 ml-4 hover:scale-105 duration-300">
            <ArrowBackIcon
              sx={{
                color: "black",
                marginTop: 2,
                marginLeft: 1.5,
                fontSize: 30,
              }}
            />
          </button>
        </Link>
        <h2 className="font-semibold 2xl:text-[130%] md:text-[120%] text-[120%] ml-[70px] mt-[-1.5rem]">
          Step 2 of 3
        </h2>
        <h1 className="font-bold 2xl:text-[290%] md:text-[260%] text-[290%] ml-7 mt-5">
          SIGN UP
        </h1>
        <p className="font-regular 2xl:text-[110%] md:text-[90%] text-[110%] ml-7 mt-[-0.8rem] mb-7">
          Create your account in quick and easy step.
        </p>

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={SignupSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form
              className="relative w-[100%] mx-auto flex justify-center flex-col"
              onSubmit={handleSubmit}
            >
              <TextField
                fullWidth
                size="small"
                type={showPassword ? "text" : "password"}
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.newpassword1}
                name="newpassword1"
                error={!!touched.newpassword1 && !!errors.newpassword1}
                helperText={touched.newpassword1 && errors.newpassword1}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword}>
                        {showPassword ? (
                          <VisibilityOffOutlinedIcon />
                        ) : (
                          <VisibilityOutlinedIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  marginBottom: `${
                    !!touched.newpassword1 && !!errors.newpassword1
                      ? "5px"
                      : "15px"
                  }`,
                  width: "80%",
                  alignSelf: "center",
                }}
              />
              <TextField
                fullWidth
                size="small"
                type={showPassword ? "text" : "password"}
                label="Confirm Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.newpassword2}
                name="newpassword2"
                error={!!touched.newpassword2 && !!errors.newpassword2}
                helperText={touched.newpassword2 && errors.newpassword2}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword}>
                        {showPassword ? (
                          <VisibilityOffOutlinedIcon />
                        ) : (
                          <VisibilityOutlinedIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  marginBottom: `${
                    !!touched.newpassword2 && !!errors.newpassword2
                      ? "5px"
                      : "15px"
                  }`,
                  width: "80%",
                  alignSelf: "center",
                }}
              />
              <div className="md:max-w-[700px]  mx-auto flex mt-[15%] mb-4">
                <input
                  className="left-[22%] pr-2"
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  value="myCheckboxValue"
                />
                <span className="text-[80%] pr-2 pl-1 mt-[0.1rem]">
                  I agree with the
                </span>
                <Link to="/privacypolicy">
                  <button className=" text-[#0094FF] text-[80%] hover:scale-105 duration-300 hover:underline pr-1">
                    Term & Condition
                  </button>
                </Link>
                <p className="mx-auto w-2 font-bold text-[#C6C6C6] md:flex hidden">
                  |
                </p>
                <Link to="/terms&condition">
                  <button className="text-[#0094FF] text-[80%] hover:scale-105 duration-300 hover:underline pl-1">
                    Privacy Policy
                  </button>
                </Link>
              </div>

              <button
                className="bg-[#000000] text-white md:h-[45px] w-[80%] mx-auto my-4 p-2 rounded-xl font-bold text-xl mt-1 hover:bg-[#1d1c1c]"
                type="submit"
              >
                CONTINUE
              </button>
            </form>
          )}
        </Formik>

        <p className="mx-auto 2xl:text-[100%] md:text-[85%] text-[100%] ">
          Have an account already?{" "}
          <span>
            <Link to="/">
              <button className="text-[#0094FF] 2xl:text-[100%] md:text-[100%] text-[100%] hover:scale-105 duration-300 hover:underline">
                Login here
              </button>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};
export default SignUpPannel2;
