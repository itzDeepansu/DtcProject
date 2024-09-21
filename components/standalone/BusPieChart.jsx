"use client"

import * as React from "react"
import { Label, Pie, PieChart as RechartsPieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { browser: "Running", buses: 4275, fill: "var(--color-chrome)" },
  { browser: "For Repair", buses: 400, fill: "var(--color-safari)" },
  { browser: "Non Servicable", buses: 1287, fill: "var(--color-firefox)" },
]

const chartConfig = {
  buses: {
    label: "Buses",
  },
  chrome: {
    label: "Running",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "For Repair",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Non Servicable",
    color: "hsl(var(--chart-3))",
  },
}

export function BusPieChart() {
  const totalbuses = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.buses, 0)
  }, [])
  return (
    <Card className="flex flex-col bg-black text-white border-[#4c4c4c]">
      <CardHeader className="items-center pb-0">
        <CardTitle>Buses</CardTitle>
        <CardDescription>19/09/2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RechartsPieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="buses"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-[#ffffff] text-3xl font-bold"
                        >
                          {totalbuses}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Buses
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </RechartsPieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
        Showing Buses Status for 19/09/2024
        </div>
      </CardFooter>
    </Card>
  )
}
