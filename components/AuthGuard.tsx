"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { verifyJWT } from "@/lib/actions/jwt";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    const valid = token && verifyJWT(token);

    const isProtected = pathname.startsWith("/patients");

    if (isProtected && !valid) {
      router.replace("/signup");
    }
  }, [pathname]);

  return <>{children}</>;
}
