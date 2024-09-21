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
  { browser: "On Duty", drivers: 4275, fill: "var(--color-chrome)" },
  { browser: "On Leave", drivers: 200, fill: "var(--color-safari)" },
  { browser: "On Break", drivers: 787, fill: "var(--color-firefox)" },
]

const chartConfig = {
  drivers: {
    label: "Drivers",
  },
  chrome: {
    label: "On Duty",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "On Leave",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "On Break",
    color: "hsl(var(--chart-3))",
  },
}

export function DriverPieChart() {
  const totaldrivers = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.drivers, 0)
  }, [])

  return (
    <Card className="flex flex-col bg-black text-white border-[#4c4c4c]">
      <CardHeader className="items-center pb-0">
        <CardTitle>Drivers</CardTitle>
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
              dataKey="drivers"
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
                          {totaldrivers.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Drivers
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
        Showing Drivers Status for 19/09/2024
        </div>
      </CardFooter>
    </Card>
  )
}
