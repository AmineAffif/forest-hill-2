"use client";

import { TrendingUp } from "lucide-react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", satisfaction: 80 },
  { month: "February", satisfaction: 90 },
  { month: "March", satisfaction: 85 },
  { month: "April", satisfaction: 70 },
  { month: "May", satisfaction: 75 },
  { month: "June", satisfaction: 80 },
];

const chartConfig = {
  satisfaction: {
    label: "Satisfaction",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function MyRadarChart() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Member Satisfaction</CardTitle>
        <CardDescription>
          Showing satisfaction levels for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="month" />
              <Radar
                dataKey="satisfaction"
                fill="var(--color-satisfaction)"
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  );
}
