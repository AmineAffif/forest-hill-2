import Layout from "../layout";
import InventoryLevels from "../../components/InventoryLevels";
import OrderHistory from "../../components/OrderHistory";

const InventoryManagement = () => {
  return (
    <Layout>
      <InventoryLevels />
      <OrderHistory />
    </Layout>
  );
};

export default InventoryManagement;
