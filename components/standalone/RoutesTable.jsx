"use client";
import React, { useState, useEffect } from "react";
import { Bus, Navigation, AlertTriangle, Square } from "lucide-react";
import { Input } from "@/components/ui/input";
import { nanoid } from "nanoid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Move dynamic generation into the client-side only using useEffect
const generateInitialBusData = () => {
  const getRandomFrequency = () => Math.floor(Math.random() * (20 - 8 + 1) + 8);

  const generateBusId = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    if (Math.random() < 0.3) {
      return randomNumber.toString().padStart(2, "0");
    } else {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return `${randomNumber.toString().padStart(3, "0")}${
        alphabet[Math.floor(Math.random() * alphabet.length)]
      }`;
    }
  };

  return [
    {
      id: generateBusId(),
      route: 43,
      status: "delayed",
      frequency: getRandomFrequency(),
      direction: "N",
    },
    {
      id: generateBusId(),
      route: 22,
      status: "running",
      frequency: getRandomFrequency(),
      direction: "W",
    },
    {
      id: generateBusId(),
      route: 13,
      status: "delayed",
      frequency: getRandomFrequency(),
      direction: "N",
    },
    {
      id: generateBusId(),
      route: 3,
      status: "running",
      frequency: getRandomFrequency(),
      direction: "N",
    },
    {
      id: generateBusId(),
      route: 3,
      status: "delayed",
      frequency: getRandomFrequency(),
      direction: "N",
    },
    {
      id: generateBusId(),
      route: 39,
      status: "delayed",
      frequency: getRandomFrequency(),
      direction: "S",
    },
    {
      id: generateBusId(),
      route: 10,
      status: "delayed",
      frequency: getRandomFrequency(),
      direction: "S",
    },
    {
      id: generateBusId(),
      route: 10,
      status: "stopped",
      frequency: getRandomFrequency(),
      direction: "N",
    },
    {
      id: generateBusId(),
      route: 40,
      status: "stopped",
      frequency: getRandomFrequency(),
      direction: "W",
    },
    {
      id: generateBusId(),
      route: 38,
      status: "delayed",
      frequency: getRandomFrequency(),
      direction: "W",
    },
    {
      id: generateBusId(),
      route: 41,
      status: "running",
      frequency: getRandomFrequency(),
      direction: "W",
    },
    {
      id: generateBusId(),
      route: 32,
      status: "delayed",
      frequency: getRandomFrequency(),
      direction: "W",
    },
    {
      id: generateBusId(),
      route: 38,
      status: "running",
      frequency: getRandomFrequency(),
      direction: "S",
    },
    {
      id: generateBusId(),
      route: 31,
      status: "stopped",
      frequency: getRandomFrequency(),
      direction: "N",
    },
    {
      id: generateBusId(),
      route: 32,
      status: "delayed",
      frequency: getRandomFrequency(),
      direction: "S",
    },
    {
      id: generateBusId(),
      route: 30,
      status: "delayed",
      frequency: getRandomFrequency(),
      direction: "E",
    },
    {
      id: generateBusId(),
      route: 49,
      status: "stopped",
      frequency: getRandomFrequency(),
      direction: "S",
    },
    {
      id: generateBusId(),
      route: 50,
      status: "delayed",
      frequency: getRandomFrequency(),
      direction: "S",
    },
    {
      id: generateBusId(),
      route: 49,
      status: "stopped",
      frequency: getRandomFrequency(),
      direction: "E",
    },
    {
      id: generateBusId(),
      route: 1,
      status: "delayed",
      frequency: getRandomFrequency(),
      direction: "E",
    },
    {
      id: generateBusId(),
      route: 1,
      status: "running",
      frequency: getRandomFrequency(),
      direction: "N",
    },
    {
      id: generateBusId(),
      route: 5,
      status: "stopped",
      frequency: getRandomFrequency(),
      direction: "N",
    },
    {
      id: generateBusId(),
      route: 27,
      status: "delayed",
      frequency: getRandomFrequency(),
      direction: "E",
    },
    {
      id: generateBusId(),
      route: 17,
      status: "delayed",
      frequency: getRandomFrequency(),
      direction: "W",
    },
    {
      id: generateBusId(),
      route: 32,
      status: "delayed",
      frequency: getRandomFrequency(),
      direction: "W",
    },
  ];
};

export default function RoutesTable({ elements }) {
  const [busData, setBusData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Generate dynamic data after component mounts to avoid SSR mismatch
  useEffect(() => {
    const initialBusData = generateInitialBusData();
    setBusData(initialBusData);
  }, []);

  const filteredBuses = busData.filter(
    (bus) =>
      (searchTerm === "" ||
        bus.id.includes(searchTerm) ||
        bus.route.toString().includes(searchTerm)) &&
      (statusFilter === "all" || bus.status === statusFilter)
  );

  const getStatusIcon = (status) => {
    switch (status) {
      case "running":
        return <Bus className="h-5 w-5 text-green-500" />;
      case "stopped":
        return <Square className="h-5 w-5 text-red-500" />;
      case "delayed":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "running":
        return "text-green-500";
      case "stopped":
        return "text-red-500";
      case "delayed":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="container p-2 bg-gray-600 max-h-full overflow-y-scroll">
      <Card className="p-4 text-white bg-[#0b0b0b] border-[#4c4c4c] rounded-lg relative">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center">
            <Bus className="mr-2" /> Bus Information Dashboard
          </CardTitle>
        </CardHeader>
        <div>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Input
              type="text"
              placeholder="Search by Route or Bus ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow border-[#7e7d7d]"
            />
            <div className="flex gap-2">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                onClick={() => setStatusFilter("all")}
              >
                All
              </Button>
              <Button
                variant={statusFilter === "running" ? "default" : "outline"}
                onClick={() => setStatusFilter("running")}
              >
                Running
              </Button>
              <Button
                variant={statusFilter === "stopped" ? "default" : "outline"}
                onClick={() => setStatusFilter("stopped")}
              >
                Stopped
              </Button>
              <Button
                variant={statusFilter === "delayed" ? "default" : "outline"}
                onClick={() => setStatusFilter("delayed")}
              >
                Delayed
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-[#7e7d7d]">
                  <TableHead>Route</TableHead>
                  <TableHead>Bus ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Frequency (min)</TableHead>
                  <TableHead>Direction</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="*:border-[#7e7d7d]">
                {filteredBuses.map((bus) => (
                  <TableRow key={nanoid()}>
                    <TableCell className="font-medium">{bus.route}</TableCell>
                    <TableCell>{bus.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(bus.status)}
                        <span className={getStatusColor(bus.status)}>
                          {bus.status}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{bus.frequency}</TableCell>
                    <TableCell>
                      <Navigation
                        className={`h-5 w-5 transform ${
                          bus.direction === "N"
                            ? "rotate-0"
                            : bus.direction === "E"
                            ? "rotate-90"
                            : bus.direction === "S"
                            ? "rotate-180"
                            : "rotate-270"
                        }`}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </Card>
    </div>
  );
}
