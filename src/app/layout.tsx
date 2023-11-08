"use client";

import { useSelectedLayoutSegment } from "next/navigation";

export default function RootLayout({
  children,
  analytics,
  team,
  auth,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
  auth: React.ReactNode;
}) {
  const loginSegments = useSelectedLayoutSegment("auth");
  const isLoggedIn = true;

  return (
    <html lang="en">
      <body>
        <div>{children}</div>
        <div>{analytics}</div>
        <div>{team}</div>
        <div>{auth}</div>
        <div>{isLoggedIn ? analytics : auth}</div>
      </body>
    </html>
  );
}
