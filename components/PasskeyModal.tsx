"use client";

import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { decryptKey, encryptKey } from "@/lib/utils";

const PasskeyModal = () => {
  const [open, setOpen] = useState(true);
  const path = usePathname();
  const [passkey, setPasskey] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const encryptedKey =
    typeof window !== "undefined"
      ? window.localStorage.getItem("accesskey")
      : null;

  useEffect(() => {
    const accesskey = encryptedKey && decryptKey(encryptedKey);

    if (path) {
      if (accesskey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY!.toString()) {
        setOpen(false);
        router.push("/wecare/admin");
      } else {
        setOpen(true);
      }
    }
  }, [encryptedKey]);

  const validatePasskey = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (passkey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
      const encryptedKey = encryptKey(passkey);

        const expiryTime = new Date().getTime() + 60 * 60 * 1000; // expires in 1 hour
        const accessData = {
          key: encryptedKey,
          expiresAt: expiryTime,
        };

      localStorage.setItem("accesskey", JSON.stringify(accessData));
      setOpen(false);
      router.push("/wecare/admin");
    } else {
      setError("Invalid passkey. Please try again.");
      setPasskey("");
    }
  };

  const closeModal = () => {
    setOpen(false);
    router.push("/");
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="shad-alert-dialog">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-start justify-between">
            Admin Access Verification
            <Image
              src="/assets/icons/close.svg"
              alt="Close"
              width={20}
              height={20}
              onClick={() => closeModal()}
              className="cursor-pointer"
            />
          </AlertDialogTitle>
          <AlertDialogDescription>
            To access the admin panel, please verify your identity using a
            passkey. This ensures that only authorized personnel can access
            sensitive information.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col items-center">
          <InputOTP
            maxLength={6}
            value={passkey}
            onChange={(value) => setPasskey(value)}
          >
            <InputOTPGroup className="shad-opt">
              <InputOTPSlot className="shad-opt-slot" index={0} />
              <InputOTPSlot className="shad-opt-slot" index={1} />
              <InputOTPSlot className="shad-opt-slot" index={2} />
              <InputOTPSlot className="shad-opt-slot" index={3} />
              <InputOTPSlot className="shad-opt-slot" index={4} />
              <InputOTPSlot className="shad-opt-slot" index={5} />
            </InputOTPGroup>
          </InputOTP>
          {error && (
            <p className="shad-error text-14-regular mt-4 flex justify-center">
              {error}
            </p>
          )}
        </div>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={(e) => validatePasskey(e)}
            className="shad-primary-btn w-full"
          >
            Enter Admin Passkey
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PasskeyModal;
