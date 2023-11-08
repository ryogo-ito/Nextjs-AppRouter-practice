"use client";

import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  return (
    <h2>
      <h1>Login</h1>
      <span onClick={() => router.back()}>Close modal</span>
      {/* ... */}
    </h2>
  );
}
