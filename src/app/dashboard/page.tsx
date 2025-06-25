"use client";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getOnboardingStep } from "@/utils/onboarding";
import { CircularProgress, Box } from "@mui/material";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      getOnboardingStep(user.id).then((step) => {
        if (step !== "complete") router.push(`/onboarding/${step}`);
      });
    }
  }, [user, loading, router]);

  if (loading || !user)
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    );

  // ...actual dashboard content
  return <div>Your Dashboard</div>;
}
