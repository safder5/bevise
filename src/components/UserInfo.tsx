"use client";
import { useAuth } from "../context/AuthContext";

export default function UserInfo() {
  const { user, loading, signOut } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Not logged in.</p>;

  return (
    <div>
      <p>Welcome, {user.email}!</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
