"use client";
import React, { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Link,
} from "@mui/material";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      setError(error.message);
    } else {
      setSuccess("Password reset email sent! Please check your inbox.");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{ mt: 8, p: 3, boxShadow: 2, borderRadius: 2, bgcolor: "white" }}
      >
        <Typography variant="h5" mb={2} align="center">
          Reset Password
        </Typography>
        <form onSubmit={handleReset}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            Send Reset Link
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
            <Link href="/login" underline="hover">
              Back to login
            </Link>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
