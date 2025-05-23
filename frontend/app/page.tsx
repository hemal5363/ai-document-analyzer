"use client";

import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";

export default function HomePage() {
  const { user, loading, logout, signup, login } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      {user ? (
        <>
          <h1>Welcome, {user.email}</h1>
          <button onClick={logout} className="bg-red-500 text-white p-2 rounded mt-4">
            Logout
          </button>
        </>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
}
