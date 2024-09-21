import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
  Waypoints,
  History,
  MapPinned,
  Flame,
  Route,
  Bus,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
const SideBar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-16 flex-col border-r border-[#4c4c4c] bg-[#171717] sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          <Link
            href="#"
            className="mb-40 group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            {/* <Package2 className="h-4 w-4 transition-all group-hover:scale-110" /> */}
            <img
              src="data:image/png;base64,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"
              alt="image"
              className="invert"
            />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="text-[2rem] bg-black">
                Dashboard
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Route className="h-5 w-5" />
                  <span className="sr-only">Routing</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="text-[2rem] bg-black">
                Routing
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://updated-scheduling-algooptima.streamlit.app/"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <History className="h-5 w-5" />
                  <span className="sr-only">Scheduling</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="text-[2rem] bg-black">
                Scheduling
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/routes"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <MapPinned className="h-5 w-5" />
                  <span className="sr-only">Routes</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="text-[2rem] bg-black">
                Routes
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/carbon"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Flame className="h-5 w-5" />
                  <span className="sr-only">Carbon Footprint</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="text-[2rem] bg-black">
                Carbon Footprint
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://ai-powered-vehicle-predictive-maintainance-algooptima.streamlit.app/"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Bus className="h-5 w-5" />
                  <span className="sr-only">Maintenance</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="text-[2rem] bg-black">
                Maintenance
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/settings"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="text-[2rem] bg-black">
                Settings
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
  )
}

export default SideBar
