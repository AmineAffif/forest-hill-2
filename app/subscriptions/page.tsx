import Layout from "../layout";
import SubscriptionRenewal from "../../components/SubscriptionRenewal";
import ExpiredSubscriptions from "../../components/ExpiredSubscriptions";
import SubscriptionsSummary from "../../components/SubscriptionsSummary";

const Subscriptions = () => {
  return (
    <Layout>
      <SubscriptionsSummary />
      <SubscriptionRenewal />
      <ExpiredSubscriptions />
    </Layout>
  );
};

export default Subscriptions;
