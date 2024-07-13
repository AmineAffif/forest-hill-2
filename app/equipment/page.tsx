import Layout from "../layout";
import EquipmentUsage from "../../components/EquipmentUsage";
import EquipmentOccupancy from "../../components/EquipmentOccupancy";
import EquipmentUsageDuration from "../../components/EquipmentUsageDuration";

const Equipment = () => {
  return (
    <Layout>
      <EquipmentUsage />
      <EquipmentOccupancy />
      <EquipmentUsageDuration />
    </Layout>
  );
};

export default Equipment;
