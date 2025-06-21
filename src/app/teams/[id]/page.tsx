// app/teams/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/utils/supabaseClient"; 
import { Box, Typography, Button, Chip } from "@mui/material";

export default function TeamProfilePage() {
  const { id } = useParams();
  const [team, setTeam] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    const fetchTeam = async () => {
      console.log("Fetching team with ID:", id);

      const { data, error } = await supabase
        .from("teams")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Supabase error:", error.message);
      } else if (!data) {
        console.warn("Team not found for ID:", id);
      } else {
        console.log("Fetched team:", data);
        setTeam(data);
      }
    };

    fetchTeam();
  }, [id]);

  if (!team) return <Typography>Loading team...</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        {team.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {team.description}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        📍 Location: {team.location}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        ⭐ Rating: {team.rating}
      </Typography>

      <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
        {team.skills?.map((skill: string) => (
          <Chip key={skill} label={skill} color="primary" variant="outlined" />
        ))}
      </Box>

      {team.portfolio_url && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">Portfolio</Typography>
          <a href={team.portfolio_url} target="_blank" rel="noreferrer">
            {team.portfolio_url}
          </a>
        </Box>
      )}

      <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
        Send Message
      </Button>
    </Box>
  );
}
