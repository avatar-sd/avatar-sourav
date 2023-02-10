import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  InputComp,
  PasswordComp,
  ButtonComp,
} from "../../../sharedComponents/input";
import { StyledOr } from "./style";
import { useNavigate } from "react-router-dom";
import OutsideAuthApi from "../../../services/outSideAuth";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { tokenUpdate } from "../../../store/actions";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authStore = useSelector((state) => state.auth, shallowEqual);
  const [isOtpLogin, setIsOtpLogin] = React.useState(false);
  const [isUserVerified, setIsUserVerified] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [otp, setOtp] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsUserVerified(false);
    const varData = {
      userId: email,
      ...(!isOtpLogin && { password: password }),
      ...(isOtpLogin && { otp: otp }),
    };
    console.log(varData);
    OutsideAuthApi()
      .loginApi(varData)
      .then((x) => {
        dispatch(
          tokenUpdate({
            data: x.data ? x.data : "",
          })
        );
        localStorage.setItem("user", JSON.stringify(x.data));
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        setError(e.data.message);
      });
  };

  const handleVerify = (event) => {
    event.preventDefault();
    const varData = {
      email: email,
    };
    OutsideAuthApi()
      .verifyOtp(varData)
      .then((x) => {
        setIsUserVerified(true);
      })
      .catch((e) => {
        console.log(e);
        setError(e.data.message);
      });
  };

  React.useEffect(() => {
    let varData = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    if (varData) {
      dispatch(tokenUpdate({ data: varData }));
    }
  }, []);

  React.useEffect(() => {
    if (authStore.data) {
      navigate("/");
    }
  }, [authStore]);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: `url(${require("../../../assets/images/Avatar.png")})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light" ? t.palette.bl[50] : "#191919",
          // backgroundSize: "COVER",
          backgroundPosition: "right bottom",
        }}
      />
      <div style={{ position: "absolute", top: "50px", left: "40px" }}>


        <img

          src={require("../../../assets/images/logo.png")}
        />
        <div style={{marginTop:"40px" }}>
          <span className="" style={{ fontSize: "80px", fontWeight: "bold", color: "white", }}>
            Metaverse
          </span>
          <br />
          <img src={require("../../../assets/images/3D Avatar Maker.png")} />
        </div>
      </div>
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={0}
        square
        sx={{
          backgroundColor: "#000000",
          paddingLeft: "10vw",
          paddingRight: "10vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            my: 2,
            mx: 4,
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Login
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{
              opacity: ".5",
              mt: "10px",
              mb: "10px",
              textAlign: "center",
            }}
          >
            Welcome back You've been missed!
          </Typography>
          <ButtonComp
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
            startIcon={
              <img
                src={require("../../../assets/images/metamask.png")}
                style={{ width: "30px", marginRight: "10px" }}
              />
            }
          >
            Connect with MetaMask
          </ButtonComp>
          <ButtonComp variant="outlined" sx={{ mb: 2 }} startIcon={
            <img
              src={require("../../../assets/images/google.png")}
              style={{ width: "30px", marginRight: "10px" }}
            />
          }>
            Connect with Google
          </ButtonComp>
          <StyledOr component="p" variant="p">
            OR
          </StyledOr>
          <Box
            component="form"
            noValidate
            onSubmit={
              isOtpLogin && !isUserVerified ? handleVerify : handleSubmit
            }
            sx={{ mt: 1 }}
          >
            <InputComp
              placeholder="Enter your username"
              name="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isOtpLogin && isUserVerified ? (
              <PasswordComp
                placeholder="Enter your Otp"
                name="Otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            ) : !isOtpLogin ? (
              <PasswordComp
                placeholder="Enter your Password"
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            ) : null}
            <Grid container>
              <Grid item xs>
                <Typography
                  component="p"
                  variant="p"
                  sx={{
                    color: "gray",
                    textAlign: "right",
                  }}
                >
                  <span
                    style={{ color: "white", cursor: "pointer" }}
                    onClick={() => navigate("/forgot_password")}
                  >
                    {" "}
                    Forgot Password?
                  </span>
                </Typography>
              </Grid>
            </Grid>
            {isOtpLogin ? (
              <ButtonComp
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {isUserVerified ? "Log In" : "Send OTP"}
              </ButtonComp>
            ) : (
              <ButtonComp
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </ButtonComp>
            )}
            <ButtonComp
              variant="outlined"
              onClick={() => setIsOtpLogin(!isOtpLogin)}
            >
              Login with {!isOtpLogin ? "OTP" : "Password"}
            </ButtonComp>
            <Grid container>
              <Grid item xs>
                <Typography
                  component="p"
                  variant="p"
                  sx={{
                    color: "gray",
                    mt: "10px",
                    mb: "10px",
                    textAlign: "center",
                  }}
                >
                  Don't have an account?{" "}
                  <span
                    style={{ color: "white", cursor: "pointer" }}
                    onClick={() => navigate("/register")}
                  >
                    {" "}
                    SignUp
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Snackbar
        open={error !== ""}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={6000}
        onClose={() => setError("")}
        severity="error"
      >
        <Alert
          onClose={() => setError("")}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Grid>
  );
}
