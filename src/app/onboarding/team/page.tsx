"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Alert,
} from "@mui/material";
import { supabase } from "@/utils/supabaseClient";

export default function TeamRegistration() {
  const { user } = useAuth();
  const router = useRouter();
  const [teamName, setTeamName] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // 1. Create the team
    const { data: team, error: teamError } = await supabase
      .from("teams")
      .insert([{ name: teamName, description: desc, created_by: user.id }])
      .select()
      .single();

    if (teamError || !team) {
      setError(teamError?.message || "Could not create team.");
      return;
    }

    // 2. Update user's team_id
    const { error: userUpdateError } = await supabase
      .from("users")
      .update({ team_id: team.id })
      .eq("id", user.id);

    if (userUpdateError) {
      setError(
        userUpdateError.message || "Could not update user with team ID."
      );
      return;
    }

    router.push("/dashboard");
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 10 }}>
      <Typography variant="h5" gutterBottom>
        Register your Team
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} mt={2}>
          <TextField
            label="Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
          <TextField
            label="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            multiline
            rows={3}
          />
          {error && <Alert severity="error">{error}</Alert>}
          <Button type="submit" variant="contained">
            Create Team
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
