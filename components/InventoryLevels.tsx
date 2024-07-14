import React from "react";
import { MyPieChart } from "./charts/PieChart";
import { ChartConfig } from "./ui/chart";

const InventoryLevels = () => {
  const inventoryData = [
    { type: "In Stock", value: 500, fill: "hsl(var(--chart-1))" },
    { type: "Out of Stock", value: 100, fill: "hsl(var(--chart-2))" },
    { type: "Low Stock", value: 50, fill: "hsl(var(--chart-3))" },
  ];

  const chartConfig = {
    inStock: {
      label: "In Stock",
      color: "hsl(var(--chart-1))",
    },
    outOfStock: {
      label: "Out of Stock",
      color: "hsl(var(--chart-2))",
    },
    lowStock: {
      label: "Low Stock",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig;

  return (
    <MyPieChart
      title="Inventory Levels"
      description="Distribution of inventory levels"
      data={inventoryData}
      dataKey="value"
      nameKey="type"
      config={chartConfig}
      footerText="Current inventory status"
    />
  );
};

export default InventoryLevels;
