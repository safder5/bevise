import { NextRequest, NextResponse } from "next/server";
import { getOnboardingStep } from "./utils/onboarding";

type User = { id: string /* other properties if needed */ };

async function getUserFromRequest(req: NextRequest): Promise<User | null> {
  // your logic to get user
  return null; // replace with actual implementation
}

export async function middleware(req: NextRequest) {
  const user = await getUserFromRequest(req);
  if (!user) return NextResponse.next();

  // Now TypeScript knows user is of type User, so user.id is valid
  const step = await getOnboardingStep(user.id);

  // Only protect dashboard and onboarding routes
  const { pathname } = req.nextUrl;

  // If not onboarded, redirect to correct onboarding step
  if (step === "role" && !pathname.startsWith("/onboarding/role")) {
    return NextResponse.redirect(new URL("/onboarding/role", req.url));
  }
  if (step === "team" && !pathname.startsWith("/onboarding/team")) {
    return NextResponse.redirect(new URL("/onboarding/team", req.url));
  }

  // If onboarding complete but trying to access onboarding, redirect to dashboard
  if (
    step === "complete" &&
    (pathname.startsWith("/onboarding/role") ||
      pathname.startsWith("/onboarding/team"))
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

// Configure matcher in your next.config.js or middleware config to apply only to relevant routes!
