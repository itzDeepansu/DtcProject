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
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

export const description =
  "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.";

const HomePage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 bg-black text-white">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-16 flex-col border-r border-[#4c4c4c] bg-black sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          <Link
            href="#"
            className="mb-40 group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            {/* <Package2 className="h-4 w-4 transition-all group-hover:scale-110" /> */}
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAAD8/Py5ubkEBATW1tbR0dHr6+sPDw/5+fmNjY2AgICHh4d9fX15eXmDg4OqqqplZWVvb2/w8PBbW1uLi4vm5uba2toXFxfg4OCTk5M0NDQnJycsLCzLy8umpqZTU1Ozs7OcnJw7OztISEjExMRDQ0MhISFiYmITExNXV1dOTk4+Pj76d/QhAAAKuklEQVR4nO1diVbiShDttGFpZBGiKAw4OqK4/f/3vaoOaqq6ok0IwbxTd854PEyWvqnq2sMYo1AoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUJwYtvKJrs5lHA9uMRoOh+ejcQEzgmkRl5+4ezQtoWgukop4rC7/RmHN/V680q9fb1tC0XiKaQmhb6nennrlkbDVFfXWZKdefQRQ0ypT7J569XGwVaWYIkXXks14UWUr4ikd2wqGB0gxvW6FRbXw528liknyct2O6OYAKfYXp158HGy4F/uz2XiGYdwIcD6ZQHh3NQBM4Thy4HU7ArhcimlROuclh46YFG9aIkW+F0FOI2uZM7AgLmvOBUVtg70JKCbJuQ2cAX5gJ0TYafKyaAVDZPOX7cURmtmQpbkCXmmB4rYViuqpUKeRJmPjnMAQKZIjV/M2mBuLUvzHKM4E/cPjBuy49fwEK64Ca5bEGaAUpc3oKRLLu+6BuE+y5v0AAQqX4tgKWxF0csko/pm3w9wYpqjeaUgMPcWEUWwBPBlK0TsN6UByHIrzIWuHFAWKk/xf6IEuP67gNZI/LckW/dJp6HmOsUyw+tx/Fs3Se8ajoN8IjMyYuUGKkqY64j+R6lP2+wlKftErquQzaLgOCXGycXXuRTTjH7+a0uDXH7TnXXOKRFEn/kJheMMzko0Lj6qKuOvY0GHHXZzvxWHxiX7AMYpwylttft/a+Xzew787zDNplyPDsyp4fCVCTJOhDQsW+BGpDsApd66uwkaXWYP1vERYk6QGgHSuJGsDbO4JwRQo1kHPBgT/zAV7jh/VQtDjygjOAG5xxvbsZZiPVAAliMG9+IR5Rn4wReFhO0YxRYoH0rPmmt171ZMsXa0SLHEaXIopJsfPBzLkBCHJ7kk+AW5dI0F/o0n4ID3nx0+Kqf/l+cB6f4fd9yWTMnHQ0XoJorkZSnUNCIMeCwEckpwetBdvGcFVT9YdM6EWoBYMjFS5sUix+CSSaTVH7NHts/R6bgW/7ryRSWumCJcbSEGEdQWKqS9UzSoytEiQPK11Twim8M8wWFw9GIjhlEXVItHNTCiAxKBLVpp6PyjqKNuDYOCWy+WA42rIMTnnGFHMHqWgBT7rkueYU9yTneVGJsn3oJSDB37wcs+bfbMMKWixzhEnjYo63jsI926C7MGbnpEdYWBkXiOT04iDxEO8LegSgmky2luKxA+maEWDZaPOOst7CyDB47drQbbXfXrf0Z6VYqqifR/JiMFoYGQuD7Dd8YB7dG5I6QZCBLeH7+exKNbvxELfObWcPlBsoleLNwGKX/fFjCQ6urFBJIM1WDHaHibM3r66oFF2FHhPeX1DY9SraIKBBIWGjycyYQdiTtpcgciaRZ+q0CDSBHAJ5pFMcH1hD741I8AdYDPM2ROWUucQ1+ysVU+KD50nSPfgnasYW1QDmIFZQrqLWP/46SwhXRKLMvAAJzSsyFW0SR21QJCUGJPlz1oaGpltJva82B7EfX6XCRHB8QCPc0Z3SQzB0E1sMyGwsGEkkxNsUIKwTcYsxl/GPF+aLvmqmpDx5vkgjdXuMuHIowGf8YjtkuXP7pClSyWNOq+01A9idfY4/S75mhYN3Sjcgz9fjxNcC+mSFdOlzVFUVKpi7D43YxbvL2NsAK+LbkUVdUG65LskR4G8aisbmZ8YSumS1Fd3QrrUv69Uzf8ZF3LH3nkJppTgz3uQO3pwE1wyfkxJKBvWX4TaQagL475BK0puvzQR2SZ3E6uwJvPhJppBmfGADD/Yg1FGhl1/3ZMakD4WrbuoVspwKSV8IMERW8Iyplwgp0tCyXl4PJXkGMhBriNuIomSIAvVUkyXxO5WYyqa7kreofy8BAsHRoZqPNj+I5Us0Owco7ItMvSdGaFLakwYqkWAE1wtJOfSoJEBTCRPZWm6hJBrxvSsoH22lSRowsr2sYAUxnKMaQWCe/pBdPRiAFZvf5Bz4gyF4qcFw+rG7MQICUp+UJ5CMPzqdTJkidhY7B6gFQ38YEQ2kVLT5MuG0pNx3c6xcPtA2foRxTBa9AT3dBM0m0h3zZefz6oXrjBsgmsYC8Vr5MyVKM4Phvlgw9O3oHtPtJokqWie8O4bqgXdpRSnxBsXYfZApvGx2ynsQSf4wYiVLthJLz1b6zRcDDzBwjKmTirYeQmmPF36cam8u7RtfPDWmmxFm7lT4aBd0YloW5QEuR+EbKJhFbVmsaWWfCqVzC0amSpuIqHYZKa2ObhIWCBIlj6V5iDgkxFba4wErb2ifvbmBOPvixcqmqmThpGcFfxgBENnrnLF+ACWA5vUUloXKhmL8RmbIMGoheJLU6Si+iAH3EdDJymYR/jlVRyDCKPFqFjUn+vMoPgMwd03akvzcPFreutS2oOAGTMysS1C4/V9SZ2MPJR3BFg+85MAQTke5mXDaAl6uHzC+us53syb6R7ZwoBhrqKXYahh81g0kOB+d3L/6G7fLprYi/nsXVGEAkEfbJ/vn9EHKFBEjV1dl66qRpwlxMp4giFDZ/cPtkPQ11XhpjddaawEPstuuzWhUxy5x3tLw9q4Lfk0WZQfFChe5JMan+iWCIz3QmrCrvvPVwWmnr+rHlVVE4Aj/gVrk5Z/pU+Ng+rFdGkjdv9982X/dEkAzvnd071Y+sVMdVVqyMLfJRXNE15mZKrPseTz78XrnZXUS/ljrYHrRrShzvB0qYoV/YRzuXErPOL7klcB6q23wY02LiybWF66T6J69N/BGvKiRlpKsWZz45vjwnKcDY3MYXmdzd9F+WIIFC/k/rKd1knxKZOmjq3l7ZFlLV+8d5bQCPCvEU2AmdbT8t2F+sJD5G6iuhWlcOQthvy6wXv9SNnVJEWIn8SqiQt2QjVHH4CF+2lJYw6V6rkeims5WXPX/y6K+HtfY2aej/h/6eBQujZwvEyYps7+XQ0Gy2X+CkLxFYPClz+OZ9Pnzy9+fL58fe5Fr6u2mDiXYtHjTeTqm7tk4ngpi9e/wwleNoddd5tSnz4Rgn7rpUgHS5PO53GxJYYmxxi/bmqLk3ue6lgahgB798p3VXdPj9VMMUGCp1gQ0EwcgDbujfuM7mnEsjdwLKOop1hnF8cvgWIRadK/lRPL3wZwgbRfU1JhgDDoiVMsSyx/F1AKhCK+YRBMRfgENSOdW/zRaQNDgyQXNwlJNTaZ+EZX9sT3Ysc08r7MwbBmsaJt2bdwTBEVNXsXzE0rGALFNQ3g3ntCjGpNr6io/oz2KOp8/amnvmb8EMRYXnGzP5xiS74OF9Y/XxX9IvZPxeZltmaK2u8228KqCthN8y392qKtMIcCnHtrFsB5iqdY896wvW1Rhv6rNYOyJqgqPAmGbkv2orOwyT4yDf8zFTIIoNhbtZUiOLx3qqjJbf4FPBnFYsXLGm1RVLCoT4yijD6fvCvtDPwygAvMNqQcXsqRMwS/2A6Aqdx8y6xUsGlLkimMzN6+089vmLclgINlbioR3Enx1wNSBWfffiYkUYS92AYhGixQ3fE55Uh0xG95/IWw7rkKw7Q9Ybir3o9pR3Tjq4ez5KW/P9K0Jf8rBRqcXiXMxVcbfiWqrrMVPvEgtCGuOQz/d34KhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqGIwn/XyIBS4MjKEgAAAABJRU5ErkJggg=="
              alt="image"
              className="invert"
            />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
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
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Orders</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="text-[2rem] bg-black">
                Orders
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Package className="h-5 w-5" />
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
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Users2 className="h-5 w-5" />
                  <span className="sr-only">Customers</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="text-[2rem] bg-black">
                Customers
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <LineChart className="h-5 w-5" />
                  <span className="sr-only">Analytics</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="text-[2rem] bg-black">
                Analytics
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
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
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 bg-[#181818]">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-[#4c4c4c] bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          {/* <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Routes</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>All Routes</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb> */}
          <div>Delhi Transport Corporation
            <div className="text-sm text-muted-foreground">Government of NCT of Delhi</div>
          </div>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px] border-[#4c4c4c]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src="/placeholder-user.jpg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 bg-[#181818]">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList className="bg-white text-black ">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="Stopped">Stopped</TabsTrigger>
                <TabsTrigger value="Non Fuctional" className="hidden sm:flex">
                  Non Functional
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 gap-1 border-[#4c4c4c] bg-white text-black hover:text-white hover:bg-[#4c4c4c]"
                    >
                      <ListFilter className="h-3.5 w-3.5 " />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap ">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Stopped</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Non Functional
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 gap-1 border-[#4c4c4c] bg-white text-black hover:text-white hover:bg-[#4c4c4c]"
                >
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Button
                  size="sm"
                  className="h-7 gap-1 bg-white text-black hover:text-white hover:bg-[#4c4c4c]"
                >
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Route
                  </span>
                </Button>
              </div>
            </div>
            <TabsContent value="all">
              <Card
                x-chunk="dashboard-06-chunk-0"
                className="bg-black text-white border-[#4c4c4c]"
              >
                <CardHeader>
                  <CardTitle>Routes</CardTitle>
                  <CardDescription>
                    Manage bus routes and view their status.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-[#4c4c4c]">
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Bus Code</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Current Driver</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Next Stop
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Last Stop
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="*:border-[#4c4c4c]">
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          {/* <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          /> */}
                        </TableCell>
                        <TableCell className="font-medium">54555</TableCell>
                        <TableCell>
                          <Badge variant="outline">On Time</Badge>
                        </TableCell>
                        <TableCell>5654</TableCell>
                        <TableCell className="hidden md:table-cell">
                          ISBT
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Badli
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          {/* <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          /> */}
                        </TableCell>
                        <TableCell className="font-medium">54555</TableCell>
                        <TableCell>
                          <Badge variant="outline">On Time</Badge>
                        </TableCell>
                        <TableCell>5654</TableCell>
                        <TableCell className="hidden md:table-cell">
                          ISBT
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Badli
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          {/* <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          /> */}
                        </TableCell>
                        <TableCell className="font-medium">54555</TableCell>
                        <TableCell>
                          <Badge variant="outline">Stopped</Badge>
                        </TableCell>
                        <TableCell>5654</TableCell>
                        <TableCell className="hidden md:table-cell">
                          ISBT
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Badli
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          {/* <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          /> */}
                        </TableCell>
                        <TableCell className="font-medium">54555</TableCell>
                        <TableCell>
                          <Badge variant="outline">On Time</Badge>
                        </TableCell>
                        <TableCell>5654</TableCell>
                        <TableCell className="hidden md:table-cell">
                          ISBT
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Badli
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          {/* <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          /> */}
                        </TableCell>
                        <TableCell className="font-medium">54555</TableCell>
                        <TableCell>
                          <Badge variant="outline">On Time</Badge>
                        </TableCell>
                        <TableCell>5654</TableCell>
                        <TableCell className="hidden md:table-cell">
                          ISBT
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Badli
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          {/* <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          /> */}
                        </TableCell>
                        <TableCell className="font-medium">54555</TableCell>
                        <TableCell>
                          <Badge variant="outline">On Time</Badge>
                        </TableCell>
                        <TableCell>5654</TableCell>
                        <TableCell className="hidden md:table-cell">
                          ISBT
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Badli
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          {/* <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          /> */}
                        </TableCell>
                        <TableCell className="font-medium">54555</TableCell>
                        <TableCell>
                          <Badge variant="outline">On Time</Badge>
                        </TableCell>
                        <TableCell>5654</TableCell>
                        <TableCell className="hidden md:table-cell">
                          ISBT
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Badli
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          {/* <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          /> */}
                        </TableCell>
                        <TableCell className="font-medium">54555</TableCell>
                        <TableCell>
                          <Badge variant="outline">On Time</Badge>
                        </TableCell>
                        <TableCell>5654</TableCell>
                        <TableCell className="hidden md:table-cell">
                          ISBT
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Badli
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      {/* <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          Hypernova Headphones
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Active</Badge>
                        </TableCell>
                        <TableCell>$129.99</TableCell>
                        <TableCell className="hidden md:table-cell">
                          100
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-10-18 03:21 PM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          AeroGlow Desk Lamp
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Active</Badge>
                        </TableCell>
                        <TableCell>$39.99</TableCell>
                        <TableCell className="hidden md:table-cell">
                          50
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-11-29 08:15 AM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          TechTonic Energy Drink
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">Draft</Badge>
                        </TableCell>
                        <TableCell>$2.99</TableCell>
                        <TableCell className="hidden md:table-cell">
                          0
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-12-25 11:59 PM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          Gamer Gear Pro Controller
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Active</Badge>
                        </TableCell>
                        <TableCell>$59.99</TableCell>
                        <TableCell className="hidden md:table-cell">
                          75
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2024-01-01 12:00 AM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          Luminous VR Headset
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Active</Badge>
                        </TableCell>
                        <TableCell>$199.99</TableCell>
                        <TableCell className="hidden md:table-cell">
                          30
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2024-02-14 02:14 PM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow> */}
                    </TableBody>
                  </Table>
                </CardContent>
                {/* <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter> */}
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
