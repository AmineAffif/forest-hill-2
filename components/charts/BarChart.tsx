"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
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
  { month: "January", renewals: 186, expirations: 80 },
  { month: "February", renewals: 305, expirations: 200 },
  { month: "March", renewals: 237, expirations: 120 },
  { month: "April", renewals: 73, expirations: 190 },
  { month: "May", renewals: 209, expirations: 130 },
  { month: "June", renewals: 214, expirations: 140 },
];

const chartConfig = {
  renewals: {
    label: "Renewals",
    color: "hsl(var(--chart-1))",
  },
  expirations: {
    label: "Expirations",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function MyBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscription Renewals and Expirations</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="renewals" fill="var(--color-renewals)" />
              <Bar dataKey="expirations" fill="var(--color-expirations)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing renewals and expirations for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
