"use client";

import { TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
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
  { month: "January", activeMembers: 186 },
  { month: "February", activeMembers: 305 },
  { month: "March", activeMembers: 237 },
  { month: "April", activeMembers: 73 },
  { month: "May", activeMembers: 209 },
  { month: "June", activeMembers: 214 },
];

const chartConfig = {
  activeMembers: {
    label: "Active Members",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function MyLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Members Over Time</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                dataKey="activeMembers"
                type="natural"
                stroke="var(--color-activeMembers)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing active members for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
