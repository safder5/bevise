"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Link,
} from "@mui/material";

export default function Signup() {
  const { signup } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const { error } = await signup(email, password);
    if (error) {
      setError(error.message);
    } else {
      setSuccess(
        "Signup successful! Please check your email to confirm your account."
      );
      setTimeout(() => router.push("/login"), 3000);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{ mt: 8, p: 3, boxShadow: 2, borderRadius: 2, bgcolor: "white" }}
      >
        <Typography variant="h5" mb={2} align="center">
          Sign Up
        </Typography>
        <form onSubmit={handleSignup}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>
          {error && (
            <Alert severity="error" sx={{ my: 1 }}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ my: 1 }}>
              {success}
            </Alert>
          )}
          <Box mt={2} textAlign="center">
            <Typography variant="body2">
              Already have an account?{" "}
              <Link href="/login" underline="hover">
                Sign in
              </Link>
            </Typography>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
