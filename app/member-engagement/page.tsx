import Layout from "../layout";
import VisitFrequency from "../../components/VisitFrequency";
import AverageVisitDuration from "../../components/AverageVisitDuration";
import MemberFeedback from "../../components/MemberFeedback";

const MemberEngagement = () => {
  return (
    <Layout>
      <VisitFrequency />
      <AverageVisitDuration />
      <MemberFeedback />
    </Layout>
  );
};

export default MemberEngagement;
