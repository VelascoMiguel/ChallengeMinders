"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import * as amplitude from "@amplitude/analytics-browser";
import * as dotenv from "dotenv";

dotenv.config();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      amplitude.init("bae12a7fedf82b197368ea59594574b0", { autocapture: true });

      amplitude.track("Page View", {
        page: pathname,
        url: window.location.href,
      });
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
