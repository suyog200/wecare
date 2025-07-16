// app/wecare/admin/page.tsx
import AdminClient from "@/components/AdminClient";
import { getReccentAppointments } from "@/lib/actions/appointment.actions";

export const dynamic = "force-dynamic"; // ensures fresh data

const AdminPage = async ({ searchParams }: { searchParams: { admin?: string } }) => {
  const appointments = await getReccentAppointments();

  return <AdminClient appointments={appointments} isAdminFlag={searchParams.admin === "true"} />;
};

export default AdminPage;





























// import { DataTable } from "@/components/table/DataTable";
// import StatCard from "@/components/StatCard";
// import { getReccentAppointments } from "@/lib/actions/appointment.actions";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { columns } from "@/components/table/columns";
// import PasskeyModal from "@/components/PasskeyModal";

// export const dynamic = "force-dynamic"; // 👈 forces fresh data



// const Admin = async ({searchParams}: SearchParamProps) => {
//   const appointments = await getReccentAppointments();
//   const isAdmin = searchParams.admin === "true";


//   return (
//     <div className="mx-auto flex max-w-7xl flex-col space-y-14">
//     {isAdmin && <PasskeyModal />}
//       <header className="admin-header">
//         <Link href="/" className="cursor-pointer">
//             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//               WeCare
//             </span>
//         </Link>
//         <p className="text-16-semibold">WeCare Admin Dashboard</p>
//       </header>
//       <main className="admin-main">
//         <section className="w-full space-y-4">
//           <h1 className="header">Welcome 👋</h1>
//           <p className="text-dark-700">
//             Start the day with managing new appointments
//           </p>
//         </section>

//         <section className="admin-stat">
//           <StatCard
//             type="appointments"
//             count={appointments.scheduledCount}
//             label="New Appointments"
//             icon="/assets/icons/appointments.svg"
//           />
//           <StatCard
//             type="pending"
//             count={appointments.pendingCount}
//             label="Pending Appointments"
//             icon="/assets/icons/pending.svg"
//           />
//           <StatCard
//             type="cancelled"
//             count={appointments.cancelledCount}
//             label="Cancelled Appointments"
//             icon="/assets/icons/cancelled.svg"
//           />
//         </section>

//         <DataTable columns={columns} data={appointments.documents} />
//       </main>
//     </div>
//   );
// };

// export default Admin;
