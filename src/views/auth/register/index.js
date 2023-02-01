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
import { Alert, Snackbar } from "@mui/material";
import OutsideAuthApi from "../../../services/outSideAuth";
import { tokenUpdate } from "../../../store/actions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authStore = useSelector((state) => state.auth, shallowEqual);
  const [error, setError] = React.useState("");
  const [isUserVerified, setIsUserVerified] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [otp, setOtp] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const varData = {
      name: name,
      email: email,
      password: password,
      otp: otp,
    };
    console.log(varData);
    OutsideAuthApi()
      .registerUserApi(varData)
      .then((x) => {
        dispatch(
          tokenUpdate({
            data: x.data ? x.data : null,
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
    if (!authStore.data && varData) {
      dispatch(tokenUpdate(varData));
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
          backgroundImage: `url(${require("../../../assets/images/metaverse.png")})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light" ? t.palette.bl[50] : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center 0px",
        }}
      />
      <img
        style={{ position: "absolute", top: "50px", left: "40px" }}
        src={require("../../../assets/images/logo.png")}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
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
            SignUp
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
          <ButtonComp
            variant="outlined"
            sx={{ mb: 2 }}
            startIcon={
              <img
                src={require("../../../assets/images/google.png")}
                style={{ width: "30px", marginRight: "10px" }}
              />
            }
          >
            Connect with Google
          </ButtonComp>
          <StyledOr component="p" variant="p">
            OR
          </StyledOr>
          <Box
            component="form"
            noValidate
            onSubmit={!isUserVerified ? handleVerify : handleSubmit}
            sx={{ mt: 1 }}
          >
            <InputComp
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              name="Name"
            />
            <InputComp
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your username"
              name="Username"
            />
            <PasswordComp
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              name="Password"
            />
            {isUserVerified ? (
              <PasswordComp
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter your Otp"
                name="Otp"
              />
            ) : null}
            <ButtonComp type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              {isUserVerified ? "Register" : "Send OTP"}
            </ButtonComp>
            {isUserVerified ? (
              <p
                style={{ textAlign: "center", cursor: "pointer" }}
                onClick={handleVerify}
              >
                Resend OTP
              </p>
            ) : null}
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
                    onClick={() => navigate("/login")}
                  >
                    Log In
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
