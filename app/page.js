import { DriverPieChart } from "@/components/standalone/DriverPieChart";
import {BusPieChart} from "@/components/standalone/BusPieChart";
import { Barchart } from "@/components/standalone/Barchart";
import RoutesTable from "@/components/standalone/RoutesTable";

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import {redirect } from "next/navigation";
export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    // <div className="flex min-h-screen w-full flex-col bg-muted/40 bg-black text-white">
    // <RoutesTable />
    // </div>
    <div className="min-h-[calc(100vh-5.75rem)] pt-3 gap-2 flex flex-col">
      <div className="flex flex-row justify-evenly">
        <DriverPieChart />
        <Barchart />
        <BusPieChart />
      </div>
      <div>
        <RoutesTable className="!no-scrollbar"/>
      </div>
    </div>
  );
}
