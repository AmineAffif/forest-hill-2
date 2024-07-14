import React from "react";
import { MyBarChart } from "./charts/BarChart";

const InstructorFeedback = () => {
  const instructorFeedbackData = [
    { month: "January", positive: 40, negative: 10 },
    { month: "February", positive: 45, negative: 12 },
    { month: "March", positive: 50, negative: 15 },
    { month: "April", positive: 55, negative: 18 },
    { month: "May", positive: 60, negative: 20 },
    { month: "June", positive: 65, negative: 22 },
  ];

  const dataKeys = [
    { key: "positive", color: "hsl(var(--chart-1))" },
    { key: "negative", color: "hsl(var(--chart-2))" },
  ];

  return (
    <MyBarChart
      title="Instructor Feedback"
      description="January - June 2024"
      data={instructorFeedbackData}
      dataKeys={dataKeys}
      footerText="Positive and negative feedback for the last 6 months"
    />
  );
};

export default InstructorFeedback;
