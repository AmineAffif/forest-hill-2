import Layout from "../layout";
import StaffHours from "../../components/StaffHours";
import PerformanceEvaluations from "../../components/PerformanceEvaluations";
import InstructorFeedback from "../../components/InstructorFeedback";

const StaffPerformance = () => {
  return (
    <Layout>
      <StaffHours />
      <PerformanceEvaluations />
      <InstructorFeedback />
    </Layout>
  );
};

export default StaffPerformance;
