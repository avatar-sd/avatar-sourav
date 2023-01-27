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
        md={7}
        sx={{
          // backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light" ? t.palette.bl[50] : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center 0px",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{
          backgroundColor: "#000000",
          paddingLeft: "5vw",
          paddingRight: "5vw",
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
