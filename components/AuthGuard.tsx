"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { verifyJWT } from "@/lib/actions/jwt";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      const isProtected = pathname.startsWith("/patients");

      if (!isProtected) return; // ✅ only check JWT for protected routes

      const token = localStorage.getItem("auth_token");

      if (!token) {
        router.replace("/login");
        return;
      }

      try {
        const payload = await verifyJWT(token);
        if (!payload) {
          localStorage.removeItem("auth_token");
          router.replace("/login");
        }
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("auth_token");
        router.replace("/login");
      }
    };

    checkAuth();
  }, [pathname]);

  return <>{children}</>;
}
