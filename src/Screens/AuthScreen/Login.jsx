import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";
import { TextField } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { AuthenticationContext } from "../../Context/AuthContext";

const LoginPannel = () => {
  useEffect(() => {
    document.title = "Envoy";
  }, []);

  const { LoginRequest, LoginValidation, open, setOpen } = useContext(
    AuthenticationContext
  );

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("required"),
    password: yup.string().required("required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleFormSubmit = (values) => {
    //console.log(values);
    LoginRequest(values.email, values.password);
  };

  return (
    <div className="flex absolute w-full h-[100vh] font-envoyFont">
      <Stack
        sx={{
          width: "100%",
          position: "absolute",
          marginTop: "15px",
          justifySelf: "center",
        }}
        spacing={2}
      >
        {open ? (
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {LoginValidation}
          </Alert>
        ) : undefined}
      </Stack>

      <div className="mx-auto bg-white 2xl:h-[510px] 2xl:w-[460px] md:w-[390px] md:h-[485px] w-[360px] h-[520px] mt-[20vh] rounded-xl shadow-2xl md:mt-[10vh] flex flex-col text-black">
        <h1 className="font-bold 2xl:text-[290%] md:text-[260%] text-[290%] mx-auto mt-5">
          ENVOY
        </h1>
        <p className="font-regular 2xl:text-[110%] md:text-[90%] text-[110%] mx-auto">
          Be updated. Be productive.
        </p>
        <h2 className="font-bold 2xl:text-xl  md:text-lg text-xl mx-auto mt-[12%] mb-4">
          Welcome! sign in to continue
        </h2>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={loginSchema}
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
                type="email"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{
                  marginBottom: `${
                    !!touched.email && !!errors.email ? "5px" : "15px"
                  }`,
                  width: "80%",
                  alignSelf: "center",
                }}
              />
              <TextField
                fullWidth
                size="small"
                type={showPassword ? "text" : "password"}
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{
                  marginBottom: `${
                    !!touched.password && !!errors.password ? "0px" : "15px"
                  }`,
                  width: "80%",
                  alignSelf: "center",
                }}
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
              />

              <div className="w-full h-10 grid grid-cols-2 ">
                <div>
                  <label className="relative left-[22%]">
                    <input type="checkbox" />
                    <span> Remember me</span>
                  </label>
                </div>
                <div className="w-full flex justify-end">
                  <Link to="/forgotpassword" className="mr-14">
                    <button className="text-[#0094FF] 2xl:text-[100%] md:text-[85%] text-[100%]  hover:scale-105 duration-300 hover:underline">
                      Forgot Password
                    </button>
                  </Link>
                </div>
              </div>
              <button
                className="bg-[#000000] text-white md:h-[45px] w-[80%] mx-auto my-4 p-2 rounded-xl font-bold text-xl hover:bg-[#1d1c1c]"
                type="submit"
              >
                LOGIN
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

export default LoginPannel;
