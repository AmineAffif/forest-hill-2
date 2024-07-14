import Overview from "../components/Overview";
import SubscriptionsSummary from "../components/SubscriptionsSummary";
import EquipmentUsageSummary from "../components/EquipmentUsageSummary";
import ClassesActivitiesSummary from "../components/ClassesActivitiesSummary";
import FinanceSummary from "../components/FinanceSummary";
import MemberEngagementSummary from "../components/MemberEngagementSummary";
import StaffPerformanceSummary from "../components/StaffPerformanceSummary";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full">
        <Overview />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SubscriptionsSummary />
        <EquipmentUsageSummary />
        <ClassesActivitiesSummary />
        <FinanceSummary />
        <MemberEngagementSummary />
        <StaffPerformanceSummary />
      </div>
    </div>
  );
};

export default Dashboard;
