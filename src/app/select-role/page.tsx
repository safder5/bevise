"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../utils/supabaseClient";
import { useAuth } from "../../context/AuthContext";

export default function SelectRole() {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!role || !user) return;
    setLoading(true);
    setError(null);
    // Insert or update user with role in Supabase
    const { error } = await supabase.from("users").upsert({
      id: user.id,
      email: user.email,
      role,
    });
    setLoading(false);
    if (error) setError(error.message);
    else router.push("/"); // Redirect to home or dashboard
  }

  if (!user) return <p>Loading...</p>;

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: 400, margin: "2rem auto", textAlign: "center" }}
    >
      <h2>Who are you?</h2>
      <div style={{ marginBottom: "1rem" }}>
        <label>
          <input
            type="radio"
            name="role"
            value="team"
            checked={role === "team"}
            onChange={() => setRole("team")}
            required
          />
          Team / Agency
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="role"
            value="client"
            checked={role === "client"}
            onChange={() => setRole("client")}
            required
          />
          Client / Hirer
        </label>
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Continue"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
