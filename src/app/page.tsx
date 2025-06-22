"use client";

import { useRouter } from "next/navigation";
import {
  Container,
  Typography,
  Box,
  Button,
} from "@mui/material";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/signup"); // Change to '/login' if you want to go to the login page
  };
  console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL); //remove this later
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Box textAlign="center">
        <Typography variant="h2" gutterBottom>
          Welcome to Bevise!
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Connect with top teams and showcase your work.
        </Typography>
        <Link href="/dashboard" passHref>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 4 }}
          >
            Go to Dashboard
          </Button>
        </Link>
      </Box>
      {/* <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Get In
      </Button> */}
    </Container>
  );
}
{/* <main style={{ padding: 32 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to MUI + Next.js!
      </Typography>
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Get Inn
      </Button>
    </main> */}