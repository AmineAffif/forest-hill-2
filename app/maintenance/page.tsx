import Layout from "../layout";
import EquipmentStatus from "../../components/EquipmentStatus";
import MaintenanceSchedule from "../../components/MaintenanceSchedule";
import MaintenanceCosts from "../../components/MaintenanceCosts";

const Maintenance = () => {
  return (
    <Layout>
      <EquipmentStatus />
      <MaintenanceSchedule />
      <MaintenanceCosts />
    </Layout>
  );
};

export default Maintenance;
