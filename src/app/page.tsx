"use client";

import { useRouter } from "next/navigation";
import { Button, Typography } from "@mui/material";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/signup"); // Change to '/login' if you want to go to the login page
  };
  console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
  return (
    <main style={{ padding: 32 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to MUI + Next.js!
      </Typography>
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Get Inn
      </Button>
    </main>
  );
}
