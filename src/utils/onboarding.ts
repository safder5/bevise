import { supabase } from "./supabaseClient";

/**
 * Returns the next onboarding step for a user.
 * - 'signup': User not found or DB error.
 * - 'role': Role not set (neither buyer nor seller).
 * - 'team': Seller has not yet created or joined a team.
 * - 'complete': Onboarding is finished.
 */
export async function getOnboardingStep(userId: string) {
  const { data: user, error } = await supabase
    .from("users")
    .select("role, team_id")
    .eq("id", userId)
    .single();

  if (error || !user) return "role";
  if (!user.role) return "role";
  if (user.role === "buyer") return "complete";
  if (user.role === "seller") {
    if (!user.team_id) return "team"; // Must create/join a team
    return "complete";
  }
  return "signup";
}
