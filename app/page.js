import SideBar from "@/components/standalone/SideBar";
import NavBar from "@/components/standalone/NavBar";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 bg-black text-white">
      <SideBar />
      <NavBar />
    </div>
  );
}
