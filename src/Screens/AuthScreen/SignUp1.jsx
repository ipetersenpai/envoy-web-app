import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import * as yup from "yup";
import { Formik } from "formik";
import MenuItem from "@mui/material/MenuItem";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useContext } from "react";
import { SignUpContext } from "../../Context/SignUpContext";

const SignUpPannel1 = () => {
  useEffect(() => {
    document.title = "Envoy | Sign Up";
  }, []);

  const navigate = useNavigate();
  const Colleges = [
    {
      value: "CEA",
      label: "College of Engineering And Architecture",
    },
    {
      value: "CITC",
      label: "College of Information Technology and Computing",
    },
    {
      value: "CSM",
      label: "College of Science and Mathematics",
    },
    {
      value: "CSTE",
      label: "College of Science and Technology Education",
    },
    {
      value: "COT",
      label: "College of Technology",
    },
  ];

  const Position = [
    {
      value: "Teacher",
      label: "Teacher",
    },
    {
      value: "Student",
      label: "Student",
    },
  ];

  const { signupData } = useContext(SignUpContext);

  const nameRegex = /^[A-Za-z\s]+$/;

  const SignupSchema = yup.object().shape({
    fullname: yup
      .string()
      .matches(nameRegex, "Invalid name. It must be letters only.")
      .required("required"),
    email: yup.string().email("Invalid email address").required("required"),
    department: yup.string().required("required"),
    position: yup.string().required("required"),
  });

  const initialValues = {
    fullname: "",
    email: "",
    department: "",
    position: "",
  };

  const handleFormSubmit = (values) => {
    signupData.fullname = values.fullname;
    signupData.email = values.email;
    signupData.department = values.department;
    signupData.position = values.position;

    if (
      values.email !== "" &&
      values.fullname !== "" &&
      values.department !== "" &&
      values.position !== ""
    ) {
      console.log(signupData);
      navigate("/signup$");
    }
  };

  return (
    <div className="flex absolute w-full h-[100vh] font-envoyFon bg-black bg-opacity-70">
      <div className="mx-auto bg-white 2xl:h-[565px] 2xl:w-[460px] md:w-[390px] md:h-[555px] w-[360px] h-[590px] mt-[10vh] rounded-xl shadow-2xl md:mt-[10vh] flex flex-col text-black">
        <Link to="/">
          <button className="h-10 w-10 ml-4 hover:scale-105 duration-300">
            <CloseRoundedIcon
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
          Step 1 of 3
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
                type="text"
                label="Full Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullname}
                name="fullname"
                error={!!touched.fullname && !!errors.fullname}
                helperText={touched.fullname && errors.fullname}
                sx={{
                  marginBottom: `${
                    !!touched.fullname && !!errors.fullname ? "5px" : "15px"
                  }`,
                  width: "80%",
                  alignSelf: "center",
                }}
              />
              <TextField
                fullWidth
                size="small"
                type="email"
                label="Email Address"
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
                type="text"
                size="small"
                id="outlined-basic"
                label="College Department"
                variant="outlined"
                select={true}
                onChange={handleChange}
                value={values.department}
                name="department"
                error={!!touched.department && !!errors.department}
                helperText={touched.department && errors.department}
                sx={{
                  marginBottom: `${
                    !!touched.email && !!errors.email ? "5px" : "15px"
                  }`,
                  width: "80%",
                  alignSelf: "center",
                }}
              >
                {Colleges.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                type="text"
                size="small"
                id="outlined-basic"
                label="Position"
                variant="outlined"
                select={true}
                onChange={handleChange}
                value={values.position}
                name="position"
                error={!!touched.position && !!errors.position}
                helperText={touched.position && errors.position}
                sx={{
                  marginBottom: `${
                    !!touched.position && !!errors.position ? "-15px" : "25px"
                  }`,
                  width: "80%",
                  alignSelf: "center",
                }}
              >
                {Position.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <button
                className="bg-[#000000] text-white md:h-[45px] w-[80%] mx-auto my-4 p-2 rounded-xl font-bold text-xl mt-6 hover:bg-[#1d1c1c]"
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

export default SignUpPannel1;
