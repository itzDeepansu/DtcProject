import { PieChart } from "@/components/standalone/PieChart";
import { Barchart } from "@/components/standalone/Barchart";
import RoutesTable from "@/components/standalone/RoutesTable";
export default function Home() {
  return (
    // <div className="flex min-h-screen w-full flex-col bg-muted/40 bg-black text-white">
    // <RoutesTable />
    // </div>
    <div className="min-h-[calc(100vh-5.75rem)] pt-3 gap-2 flex flex-col">
      <div className="flex flex-row justify-evenly">
        <PieChart />
        <Barchart />
        <PieChart />
      </div>
      <div>
        <RoutesTable className="!no-scrollbar"/>
      </div>
    </div>
  );
}
