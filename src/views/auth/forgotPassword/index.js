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

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [isUserVerified, setIsUserVerified] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

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
          backgroundSize: "50vh",
          backgroundPosition: "right bottom",
        }}
      />
      <div style={{ position: "absolute", top: "50px", left: "40px" }}>
        <img src={require("../../../assets/images/logo.png")} />
        <div style={{ marginTop: "40px" }}>
          <span
            className=""
            style={{ fontSize: "80px", fontWeight: "bold", color: "white" }}
          >
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
        // component={Paper}
        elevation={6}
        square
        sx={{
          backgroundColor: "#000000",
          paddingLeft: "10vw",
          paddingRight: "10vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        <Box
          sx={{
            my: 2,
            mx: 4,
          }}
        >
          <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
            Forgot Password
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
            An OTP will sent you to your registered email for verification.!
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            {!isUserVerified ? (
              <InputComp placeholder="Enter your user name" name="Username" />
            ) : null}
            {isUserVerified ? (
              <PasswordComp
                placeholder="Enter your new password"
                name="Password"
              />
            ) : null}
            {isUserVerified ? (
              <PasswordComp placeholder="Enter your Otp" name="Otp" />
            ) : null}
            <ButtonComp
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => setIsUserVerified(!isUserVerified)}
            >
              {isUserVerified ? "Change Password" : "Forgot Password"}
            </ButtonComp>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
