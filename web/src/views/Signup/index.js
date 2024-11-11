import React, { useState } from "react";
import { Rwep } from "../../config/firebase/firebasemethod.js";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
// import "./auth2.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      await Rwep(email, password);
      alert("Register Successful!");
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container maxWidth="xs" className="register-container">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={4}
        p={3}
        borderRadius={2}
        // boxShadow={3}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Register
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
          onClick={signUp}
        >
          Register
        </Button>

        {/* Uncomment if you want to add login navigation */}
        {/* <Typography variant="body2" mt={2}>
          Already have an account?{" "}
          <Button color="primary" onClick={() => navigate("/login")}>
            Login here
          </Button>
        </Typography> */}
      </Box>
    </Container>
  );
}