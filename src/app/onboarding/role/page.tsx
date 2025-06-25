"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Button, Box, Typography, Stack } from "@mui/material";
import { supabase } from "@/utils/supabaseClient";

export default function RoleSelection() {
  const { user } = useAuth();
  const router = useRouter();

  const chooseRole = async (role: "buyer" | "seller") => {
    await supabase.from("users").update({ role }).eq("id", user.id);
    if (role === "buyer") router.push("/dashboard");
    else router.push("/onboarding/team");
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Welcome! What brings you here?
      </Typography>
      <Stack spacing={2} mt={4}>
        <Button
          variant="contained"
          onClick={() => chooseRole("buyer")}
          fullWidth
        >
          I want to hire (Buyer)
        </Button>
        <Button
          variant="contained"
          onClick={() => chooseRole("seller")}
          color="secondary"
          fullWidth
        >
          I want to offer services (Seller/Team)
        </Button>
      </Stack>
    </Box>
  );
}
