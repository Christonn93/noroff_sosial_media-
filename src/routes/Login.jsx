// Importing React
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Paper, TextField } from "@mui/material";

import Logo from "../components/appbar/logo.png";

import { updateHead } from "../js/updateHeader";

// Importing function
import { loginUser } from "../api/auth/Login.js";

// Importing formik
import { Formik } from "formik";
import * as yup from "yup";

import AuthContext from "../api/context/AuthProvider.jsx";
import { getProfile } from "../api/auth/Profile.js";
import useApi from "../hooks/useApi.jsx";

const Login = () => {
 updateHead("Login");

 // eslint-disable-next-line
 const [email, setEmail] = useState();
 const [password, setUserPassword] = useState();
 const [loginStatus, setLoginStatus] = useState(false);

 const auth = useContext(AuthContext);

 const navigate = useNavigate();

 const formSubmit = async () => {
    // const resp = await useApi(`auth/login`, "GET", { email, password })
  const resp = await loginUser({ email, password });

  if ("accessToken" in resp) {
   localStorage.setItem("ApiToken", resp["accessToken"]);
   localStorage.setItem("UserData", JSON.stringify(resp));
   localStorage.setItem("isLoggedIn", true);

   const profileCall = await getProfile();
   localStorage.setItem("UserData", JSON.stringify(profileCall));
   navigate("/profile");
  } else {
   setLoginStatus(true);
  }
 };

 const initialValues = {
  email: "",
  password: "",
 };

 const checkoutSchema = yup.object().shape({
  email: yup.string().required("Email is missing"),
  password: yup.string().required("Password is missing"),
 });

 const onEmailChange = (e, setFieldValue) => {
  const email = e.target.value;
  setEmail(email);
  setFieldValue("email", email, false);
 };

 const onPasswordChange = (e, setFieldValue) => {
  const password = e.target.value;
  setUserPassword(password);
  setFieldValue("password", password, false);
 };

 return (
  <Box
   sx={{
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
   }}
  >
   <Paper>
    <Box p={2} display={"flex"} flexDirection={"column"} gap={2}>
     <>
      {loginStatus ? (
       <>
        <Box marginTop={2} marginBottom={2}>
      
        </Box>
       </>
      ) : (
       <></>
      )}
      <Formik onSubmit={formSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
       {({ values, errors, touched, handleBlur, handleSubmit, setFieldValue }) => (
        <Box
         component="form"
         onSubmit={handleSubmit}
         sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
         }}
        >
         <TextField
          data-cy="email-input"
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          value={values.email}
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          onBlur={handleBlur}
          onChange={(e) => onEmailChange(e, setFieldValue)}
         />
         <TextField
          data-cy="password-input"
          variant="outlined"
          margin="normal"
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={values.password}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          onChange={(e) => onPasswordChange(e, setFieldValue)}
          onBlur={handleBlur}
         />
         <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => {
           auth.storeUserData();
          }}
          data-cy="login-button"
         >
          Sign In
         </Button>
        </Box>
       )}
      </Formik>
     </>
    </Box>
   </Paper>
   <img src={Logo} alt="Company logo" />
  </Box>
 );
};

export default Login;
