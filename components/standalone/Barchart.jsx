"use client";

import React, { useState, useMemo } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive bar chart";

const chartData = [
    { date: "2024-04-01", Petrol: 222, Electric: 150 },
    { date: "2024-04-02", Petrol: 97, Electric: 180 },
    { date: "2024-04-03", Petrol: 167, Electric: 120 },
    { date: "2024-04-04", Petrol: 242, Electric: 260 },
    { date: "2024-04-05", Petrol: 373, Electric: 290 },
    { date: "2024-04-06", Petrol: 301, Electric: 340 },
    { date: "2024-04-07", Petrol: 245, Electric: 180 },
    { date: "2024-04-08", Petrol: 409, Electric: 320 },
    { date: "2024-04-09", Petrol: 59, Electric: 110 },
    { date: "2024-04-10", Petrol: 261, Electric: 190 },
    { date: "2024-04-11", Petrol: 327, Electric: 350 },
    { date: "2024-04-12", Petrol: 292, Electric: 210 },
    { date: "2024-04-13", Petrol: 342, Electric: 380 },
    { date: "2024-04-14", Petrol: 137, Electric: 220 },
    { date: "2024-04-15", Petrol: 120, Electric: 170 },
    { date: "2024-04-16", Petrol: 138, Electric: 190 },
    { date: "2024-04-17", Petrol: 446, Electric: 360 },
    { date: "2024-04-18", Petrol: 364, Electric: 410 },
    { date: "2024-04-19", Petrol: 243, Electric: 180 },
    { date: "2024-04-20", Petrol: 89, Electric: 150 },
    { date: "2024-04-21", Petrol: 137, Electric: 200 },
    { date: "2024-04-22", Petrol: 224, Electric: 170 },
    { date: "2024-04-23", Petrol: 138, Electric: 230 },
    { date: "2024-04-24", Petrol: 387, Electric: 290 },
    { date: "2024-04-25", Petrol: 215, Electric: 250 },
    { date: "2024-04-26", Petrol: 75, Electric: 130 },
    { date: "2024-04-27", Petrol: 383, Electric: 420 },
    { date: "2024-04-28", Petrol: 122, Electric: 180 },
    { date: "2024-04-29", Petrol: 315, Electric: 240 },
    { date: "2024-04-30", Petrol: 454, Electric: 380 },
    { date: "2024-05-01", Petrol: 165, Electric: 220 },
    { date: "2024-05-02", Petrol: 293, Electric: 310 },
    { date: "2024-05-03", Petrol: 247, Electric: 190 },
    { date: "2024-05-04", Petrol: 385, Electric: 420 },
    { date: "2024-05-05", Petrol: 481, Electric: 390 },
    { date: "2024-05-06", Petrol: 498, Electric: 520 },
    { date: "2024-05-07", Petrol: 388, Electric: 300 },
    { date: "2024-05-08", Petrol: 149, Electric: 210 },
    { date: "2024-05-09", Petrol: 227, Electric: 180 },
    { date: "2024-05-10", Petrol: 293, Electric: 330 },
    { date: "2024-05-11", Petrol: 335, Electric: 270 },
    { date: "2024-05-12", Petrol: 197, Electric: 240 },
    { date: "2024-05-13", Petrol: 197, Electric: 160 },
    { date: "2024-05-14", Petrol: 448, Electric: 490 },
    { date: "2024-05-15", Petrol: 473, Electric: 380 },
    { date: "2024-05-16", Petrol: 338, Electric: 400 },
    { date: "2024-05-17", Petrol: 499, Electric: 420 },
    { date: "2024-05-18", Petrol: 315, Electric: 350 },
    { date: "2024-05-19", Petrol: 235, Electric: 180 },
    { date: "2024-05-20", Petrol: 177, Electric: 230 },
    { date: "2024-05-21", Petrol: 82, Electric: 140 },
    { date: "2024-05-22", Petrol: 81, Electric: 120 },
    { date: "2024-05-23", Petrol: 252, Electric: 290 },
    { date: "2024-05-24", Petrol: 294, Electric: 220 },
    { date: "2024-05-25", Petrol: 201, Electric: 250 },
    { date: "2024-05-26", Petrol: 213, Electric: 170 },
    { date: "2024-05-27", Petrol: 420, Electric: 460 },
    { date: "2024-05-28", Petrol: 233, Electric: 190 },
    { date: "2024-05-29", Petrol: 78, Electric: 130 },
    { date: "2024-05-30", Petrol: 340, Electric: 280 },
    { date: "2024-05-31", Petrol: 178, Electric: 230 },
    { date: "2024-06-01", Petrol: 178, Electric: 200 },
    { date: "2024-06-02", Petrol: 470, Electric: 410 },
    { date: "2024-06-03", Petrol: 103, Electric: 160 },
    { date: "2024-06-04", Petrol: 439, Electric: 380 },
    { date: "2024-06-05", Petrol: 88, Electric: 140 },
    { date: "2024-06-06", Petrol: 294, Electric: 250 },
    { date: "2024-06-07", Petrol: 323, Electric: 370 },
    { date: "2024-06-08", Petrol: 385, Electric: 320 },
    { date: "2024-06-09", Petrol: 438, Electric: 480 },
    { date: "2024-06-10", Petrol: 155, Electric: 200 },
    { date: "2024-06-11", Petrol: 92, Electric: 150 },
    { date: "2024-06-12", Petrol: 492, Electric: 420 },
    { date: "2024-06-13", Petrol: 81, Electric: 130 },
    { date: "2024-06-14", Petrol: 426, Electric: 380 },
    { date: "2024-06-15", Petrol: 307, Electric: 350 },
    { date: "2024-06-16", Petrol: 371, Electric: 310 },
    { date: "2024-06-17", Petrol: 475, Electric: 520 },
    { date: "2024-06-18", Petrol: 107, Electric: 170 },
    { date: "2024-06-19", Petrol: 341, Electric: 290 },
    { date: "2024-06-20", Petrol: 408, Electric: 450 },
    { date: "2024-06-21", Petrol: 169, Electric: 210 },
    { date: "2024-06-22", Petrol: 317, Electric: 270 },
    { date: "2024-06-23", Petrol: 480, Electric: 530 },
    { date: "2024-06-24", Petrol: 132, Electric: 180 },
    { date: "2024-06-25", Petrol: 141, Electric: 190 },
    { date: "2024-06-26", Petrol: 434, Electric: 380 },
    { date: "2024-06-27", Petrol: 448, Electric: 490 },
    { date: "2024-06-28", Petrol: 149, Electric: 200 },
    { date: "2024-06-29", Petrol: 103, Electric: 160 },
    { date: "2024-06-30", Petrol: 446, Electric: 400 },
  ]

const chartConfig = {
  emmision: {
    label: "Carbon Emmission",
  },
  Petrol: {
    label: "Petrol",
    color: "hsl(var(--chart-1))",
  },
  Electric: {
    label: "Electric",
    color: "hsl(var(--chart-2))",
  },
};

export function Barchart() {
  const [activeChart, setActiveChart] = useState("Petrol");

  const total = useMemo(
    () => ({
      Petrol: chartData.reduce((acc, curr) => acc + curr.Petrol, 0),
      Electric: chartData.reduce((acc, curr) => acc + curr.Electric, 0),
    }),
    []
  );

  return (
    <Card className="bg-black text-white border-[#4c4c4c] *:border-[#4c4c4c]">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Carbon Footprint</CardTitle>
          <CardDescription>
            Showing total carbon emission for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["Petrol", "Electric"].map((key) => (
            <button
              key={key}
              data-active={activeChart === key}
              className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/15 sm:border-l sm:border-t-0 sm:px-8 sm:py-6 border-[#4c4c4c] "
              onClick={() => setActiveChart(key)}
            >
              <span className="text-xs text-muted-foreground">
                {chartConfig[key].label}
              </span>
              <span className="text-lg font-bold leading-none sm:text-3xl">
                {total[key].toLocaleString()}Kg
              </span>
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="emmision"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}