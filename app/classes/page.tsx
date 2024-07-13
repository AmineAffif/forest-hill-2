import Layout from "../layout";
import ClassesParticipation from "../../components/ClassesParticipation";
import ClassesFillingRate from "../../components/ClassesFillingRate";
import ClassesCancellations from "../../components/ClassesCancellations";

const Classes = () => {
  return (
    <Layout>
      <ClassesParticipation />
      <ClassesFillingRate />
      <ClassesCancellations />
    </Layout>
  );
};

export default Classes;
