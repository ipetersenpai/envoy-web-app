import React, { useState, useEffect } from "react";
import ScreenPath from "../../components/ScreenPath";
import * as yup from "yup";
import { Formik } from "formik";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useContext } from "react";
import { UpdateProfileContext } from "../../Context/UpdateProfile";

const Profile = () => {
  useEffect(() => {
    document.title = "Envoy | Profile";
  }, []);

  const { UpdateUserData } = useContext(UpdateProfileContext);
  const nameRegex = /^[A-Za-z\s]+$/;

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showPassword, setShowPassword] = useState(false);
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

  const SignupSchema = yup.object().shape({
    fullname: yup
      .string()
      .matches(nameRegex, "Invalid name. It must be letters only."),
    email: yup.string().email("Invalid email address"),
    department: yup.string(),
    position: yup.string(),
    password: yup
      .string()
      .matches(
        passwordRegex,
        "Password must be 8 characters long and contain an alphabetic character."
      ),
  });

  const initialValues = {
    fullname: "",
    email: "",
    department: "",
    position: "",
    password: "",
  };

  const handleFormSubmit = (values) => {
    UpdateUserData(
      values.fullname,
      values.email,
      values.department,
      values.position,
      values.password
    );
  };
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

  return (
    <div className="flex w-[100%] flex-col font-envoyFont text-black">
      <div className="flex">
        <ScreenPath currentPath="Profile" />
      </div>
      <div className="flex-wrap bg-white mx-[20px] min-h-[80vh] rounded-lg shadow-lg">
        <div className="h-full md:w-[70%] md:ml-[12%] mx-auto grid md:grid-cols-2">
          {/* COLUMN 1 SIDE  */}
          <div className="pt-5">
            <div className="bg-profile_icon bg-contain bg-no-repeat md:h-[200px] md:w-[200px] h-[150px] w-[150px] mt-10 mx-auto" />
            <h1 className="font-bold text-center mt-5 text-lg">
              Mark ZuckerBerg
            </h1>
            <p className="font-bold text-center text-sm md:text-lg-sm">
              mark.loveburger@gmail.com
            </p>
            <p className="font-bold text-center text-sm md:text-lg-sm mt-4 mx-10">
              College of Information Technology and Computing
            </p>
            <h1 className="font-bold text-center text-sm md:text-lg mt-4 mx-10">
              Student
            </h1>
          </div>
          {/* COLUMN 2 SIDE  */}
          <div className=" pt-12">
            <h1 className="font-bold md:text-start mt-5 text-lg text-center mb-10">
              Update your Information
            </h1>
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
                        !!touched.position && !!errors.position ? "5px" : "15px"
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

                  <TextField
                    fullWidth
                    size="small"
                    type={showPassword ? "text" : "password"}
                    label="New Password"
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

                  <button
                    className="bg-[#000000] text-white md:h-[45px] w-[80%] mx-auto my-4 p-2 rounded-xl font-bold text-xl mt-6 hover:bg-[#1d1c1c]"
                    type="submit"
                  >
                    UPDATE
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;