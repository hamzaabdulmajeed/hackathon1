import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
// import "./auth1.css";
import {Lwep} from "../../config/firebase/firebasemethod.js"
import AuthContainer from "../../components/Auth/Auth.js";

export default function Aregister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const signIn = async () => {
    if (!email || !password) {
      alert("Please fill in both email and password fields.");
      return;
    }

    try {
      // Call Lwep function to authenticate the user
      await Lwep(email, password);
    //   alert("Login Successful!");
      navigate("/home");
    } catch (error) {
    //   alert(error.message);
    }
  };

  return (
    <Container maxWidth="xs" className="login-container">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={4}
        p={3}
        borderRadius={2}
        // boxShadow={1}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Login
        </Typography>

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={signIn}
        >
          Login
        </Button>

        {/* Uncomment if you want to add signup navigation */}
        <Typography variant="body2" mt={2}>
          Don't have an account?{" "}
          <Button color="primary" onClick={() => navigate("/signup")}>
            Sign up here
          </Button>
        </Typography>
        <AuthContainer />
      </Box>
    </Container>
  );
}
