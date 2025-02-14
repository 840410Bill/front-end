/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import logo_hp from "assets/images/logo-HP.png";

import { useAuth } from "../../../auth-context/auth.context";
import AuthApi from "../../../api/auth";

import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

function SignIn() {
  const history = useHistory();
  const { setUser } = useAuth();
  const { user } = useAuth();

  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Sign in");
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const login = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (user && user.token) {
      return history.push(localStorage.getItem("redirectAfterLogin"));
    }
    if (email === "") {
      return setError("You must enter your email.");
    }
    if (password === "") {
      return setError("You must enter your password");
    }
    setButtonText("Signing in");
    try {
      let response = await AuthApi.Login({
        email,
        password,
      });
      if (response.data && response.data.success === false) {
        return setError(response.data.msg);
      }
      // const response = {
      //   data: {
      //     success: true,
      //     token:
      //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNzAzNTc2NDY4fQ.OhhkMK3Vh58Pk3uy2bra_bw24dxTRRbHCYC5ih3EY6o",
      //     user: {
      //       _id: 1,
      //       username: "bill",
      //       email: "bill.chang@hp.com",
      //     },
      //   },
      // };
      return setProfile(response);
    } catch (err) {
      console.log(err);
      setButtonText("Sign in");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
  };

  const guestlogin = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (user && user.token) {
      return history.push(localStorage.getItem("redirectAfterLogin"));
    }
    setButtonText("Signing in");
    try {
      let email = "guest@none.com";
      let password = "123456789";
      let response = await AuthApi.Login({
        email,
        password,
      });
      if (response.data && response.data.success === false) {
        return setError(response.data.msg);
      }
      return setProfile(response);
    } catch (err) {
      console.log(err);
      setButtonText("Sign in");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
  };

  const setProfile = async (response) => {
    let user = { ...response.data.user };
    user.token = response.data.token;
    user = JSON.stringify(user);
    setUser(user);
    localStorage.setItem("user", user);
    Cookies.set("token", response.data.token, { expires: new Date(Date.now() + 12 * 60 * 60000) });
    console.log("redirectAfterLogin", localStorage.getItem("redirectAfterLogin"));
    history.push(localStorage.getItem("redirectAfterLogin"));
  };

  return (
    <CoverLayout
      title="HP COMM Portal"
      // description={`${user && user.token ? "" : "Enter your email and password to sign in"}`}
      image={logo_hp}
      button="Guest"
      onClick={() => {
        guestlogin();
      }}
      style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
    >
      {user && user.token ? (
        <div>
          <h3 style={{ textAlign: "center" }}>You are already signed in.</h3>
          <SuiBox mt={4} mb={1}>
            <SuiButton variant="gradient" buttonColor="info" fullWidth onClick={login}>
              {`Let"s go`}
            </SuiButton>
          </SuiBox>
        </div>
      ) : (
        <SuiBox component="form" role="form">
          <SuiBox mb={2}>
            <SuiBox mb={1} ml={0.5}>
              <SuiTypography component="label" variant="caption" fontWeight="bold">
                Email
              </SuiTypography>
            </SuiBox>
            <SuiInput
              defaultValue={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError(undefined);
              }}
              type="email"
              placeholder="Email"
            />
          </SuiBox>
          <SuiBox mb={2}>
            <SuiBox mb={1} ml={0.5}>
              <SuiTypography component="label" variant="caption" fontWeight="bold">
                Password
              </SuiTypography>
            </SuiBox>
            <SuiInput
              defaultValue={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError(undefined);
              }}
              type="password"
              placeholder="Password"
            />
          </SuiBox>
          <SuiBox display="flex" alignItems="center">
            <Switch checked={rememberMe} onChange={handleSetRememberMe} />
            <SuiTypography
              variant="button"
              fontWeight="regular"
              onClick={handleSetRememberMe}
              customClass="cursor-pointer user-select-none"
            >
              &nbsp;&nbsp;Remember me
            </SuiTypography>
          </SuiBox>
          <SuiBox mt={2} mb={2} textAlign="center">
            <h6
              style={{
                fontSize: ".8em",
                color: "red",
                textAlign: "center",
                fontWeight: 400,
                transition: ".2s all",
              }}
            >
              {error}
            </h6>
          </SuiBox>

          <SuiBox mt={4} mb={1}>
            <SuiButton variant="gradient" buttonColor="info" fullWidth onClick={login}>
              {buttonText}
            </SuiButton>
          </SuiBox>
          <SuiBox mt={3} textAlign="center">
            <SuiTypography variant="button" textColor="text" fontWeight="regular">
              {/* Don&apos;t have an account?{" "} */}
              {/* <SuiTypography
                component={Link}
                to="/authentication/sign-up"
                variant="button"
                textColor="info"
                fontWeight="medium"
                textGradient
                
              >
                Sign up
              </SuiTypography> */}
              <SuiTypography
                variant="button"
                textColor="info"
                fontWeight="medium"
                textGradient
                onClick={() => {
                  guestlogin();
                }}
                style={{ cursor: "pointer" }}
              >
                Login as guest
              </SuiTypography>
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      )}
    </CoverLayout>
  );
}

export default SignIn;
