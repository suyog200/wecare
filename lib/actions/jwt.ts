// lib/jwt.ts
import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode("suyog");

export async function generateJWT(payload: Record<string, unknown>) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(secret);
}

export async function verifyJWT(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
}
