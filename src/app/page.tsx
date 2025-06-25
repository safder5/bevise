"use client";
import {
  Button,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <Box textAlign="center" width="100%">
      <Typography variant="h2" gutterBottom fontWeight="bold">
        Welcome to Bevise
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Accelerate your projects with collaborative teams of experts!
      </Typography>
      <Typography color="text.secondary" mb={4}>
        Join as a buyer to find the best teams, or as a seller to create and
        join high-impact teams.
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => router.push("/signup")}
        >
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
}
