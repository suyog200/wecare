// components/AdminClient.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PasskeyModal from "@/components/PasskeyModal";
import StatCard from "@/components/StatCard";
import { DataTable } from "@/components/table/DataTable";
import { columns } from "@/components/table/columns";
import Link from "next/link";
import { decryptKey } from "@/lib/utils";

interface AdminClientProps {
  appointments: any;
  isAdminFlag: boolean;
}

const AdminClient = ({ appointments, isAdminFlag }: AdminClientProps) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  //   useEffect(() => {
  //     const encryptedKey = localStorage.getItem("accesskey");
  //     const accesskey = encryptedKey ? decryptKey(encryptedKey) : null;

  //     if (accesskey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
  //       setAuthorized(true);
  //     } else {
  //       // Redirect to modal if not authorized and no ?admin=true
  //       if (!isAdminFlag) {
  //         router.replace("/wecare/admin?admin=true");
  //       }
  //     }
  //   }, [isAdminFlag]);

  useEffect(() => {
    const accessDataString = localStorage.getItem("accesskey");
    let isValid = false;
    console.log("Access Data String:", accessDataString);

    if (accessDataString) {
      try {
        const accessData = JSON.parse(accessDataString);
        console.log("Access Data:", accessData);
        const decryptedKey = decryptKey(accessData.key);
        const currentTime = new Date().getTime();

        if (decryptedKey &&
          decryptedKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY &&
          currentTime < accessData.expiresAt
        ) {
          isValid = true;
        } else {
          localStorage.removeItem("accesskey");
        }
      } catch (error) {
        localStorage.removeItem("accesskey");
      }
    }
    if (isValid) {
      setAuthorized(true);
    } else {
      if (!isAdminFlag) {
        router.replace("/wecare/admin?admin=true");
      }
    }
  }, [isAdminFlag]);

  if (!authorized && !isAdminFlag) {
    return null; // or show a loading spinner
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      {isAdminFlag && <PasskeyModal />}

      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            WeCare
          </span>
        </Link>
        <p className="text-16-semibold">WeCare Admin Dashboard</p>
        <button
            onClick={() => {
            localStorage.removeItem("accesskey");
            window.location.href = "/"; // or redirect to login
            }}
            className="shad-secondary-btn"
        >
            Logout
        </button>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="New Appointments"
            icon="/assets/icons/appointments.svg"
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending Appointments"
            icon="/assets/icons/pending.svg"
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled Appointments"
            icon="/assets/icons/cancelled.svg"
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default AdminClient;
