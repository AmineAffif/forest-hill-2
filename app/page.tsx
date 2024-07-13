import Overview from "../components/Overview";
import SubscriptionsSummary from "../components/SubscriptionsSummary";
import EquipmentUsageSummary from "../components/EquipmentUsageSummary";
import ClassesActivitiesSummary from "../components/ClassesActivitiesSummary";
import FinanceSummary from "../components/FinanceSummary";
import MemberEngagementSummary from "../components/MemberEngagementSummary";
import StaffPerformanceSummary from "../components/StaffPerformanceSummary";

const Dashboard = () => {
  return (
    <>
      <Overview />
      <SubscriptionsSummary />
      <EquipmentUsageSummary />
      <ClassesActivitiesSummary />
      <FinanceSummary />
      <MemberEngagementSummary />
      <StaffPerformanceSummary />
    </>
  );
};

export default Dashboard;
