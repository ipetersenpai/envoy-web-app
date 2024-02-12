import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import * as yup from "yup";
import { Formik } from "formik";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { ForgotPasswordContext } from "../../Context/ForgotPasswordContext";

const ForgotPass1 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Envoy | ForgotPassword";
  }, []);

  const { FindEmail, open, setOpen, UserEmail, checkEmailValidation } =
    useContext(ForgotPasswordContext);
  const forgotpasswordSchema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("required"),
  });
  const initialValues = {
    email: "",
  };

  const handleFormSubmit = (values) => {
    FindEmail(values.email);
    if (values.email === UserEmail) {
      navigate("/accountrecover");
    }
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
            {checkEmailValidation}
          </Alert>
        ) : undefined}
      </Stack>

      <div className="mx-auto bg-white 2xl:h-[510px] 2xl:w-[460px] md:w-[390px] md:h-[475px] w-[360px] h-[520px] mt-[20vh] rounded-xl shadow-2xl md:mt-[10vh] flex flex-col text-black">
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
          Forgot Password?
        </h2>
        <p className="px-10 text-sm mt-[-0.5rem] mb-10">
          Enter your registered email address so we can find your account and to
          reset your password.
        </p>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={forgotpasswordSchema}
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

              <button
                className="bg-[#000000] text-white md:h-[45px] w-[80%] mx-auto my-4 p-2 rounded-xl font-bold text-xl hover:bg-[#1d1c1c]"
                type="submit"
              >
                RECOVER
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

export default ForgotPass1;
