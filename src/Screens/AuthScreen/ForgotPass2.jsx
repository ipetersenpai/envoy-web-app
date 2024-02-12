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

const ForgotPass2 = () => {
  useEffect(() => {
    document.title = "Envoy | Sign Up";
  }, []);

  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showPassword, setShowPassword] = useState(false);
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
    console.log(values);
  };
  return (
    <div className="flex absolute w-full h-[100vh] font-envoyFont">
      <div className="mx-auto bg-white 2xl:h-[565px] 2xl:w-[460px] md:w-[390px] md:h-[540px] w-[360px] h-[590px] mt-[10vh] rounded-xl shadow-2xl md:mt-[10vh] flex flex-col text-black">
        <Link to="/">
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
        <h1 className="font-bold 2xl:text-[290%] md:text-[260%] text-[290%] mx-auto mt-[-1.2rem]">
          ENVOY
        </h1>
        <p className="font-regular 2xl:text-[110%] md:text-[90%] text-[110%] mx-auto">
          Be updated. Be productive.
        </p>
        <h2 className="font-bold 2xl:text-xl  md:text-lg text-xl ml-10 mt-[12%] mb-4">
          New Password
        </h2>
        <p className="px-10 text-sm mt-[-0.5rem] mb-7">
          Make sure your password is not easy to access by others.
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
              <button
                className="bg-[#000000] text-white mt-5 md:h-[45px] w-[80%] mx-auto my-3 p-2 rounded-xl font-bold text-xl hover:bg-[#1d1c1c]"
                type="submit"
                onClick={() => {
                  navigate("/");
                }}
              >
                UPDATE
              </button>
            </form>
          )}
        </Formik>

        <p className="mx-auto 2xl:text-[100%] md:text-[85%] text-[100%] ">
          Don’t have an account?{" "}
          <span>
            <Link to="/signup">
              <button className="text-[#0094FF] 2xl:text-[100%] md:text-[100%] text-[100%] hover:scale-105 duration-300 hover:underline">
                Register here
              </button>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPass2;
