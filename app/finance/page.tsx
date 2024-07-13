import Layout from "../layout";
import FinanceRevenues from "../../components/FinanceRevenues";
import FinanceForecast from "../../components/FinanceForecast";
import PaymentStatistics from "../../components/PaymentStatistics";

const Finance = () => {
  return (
    <Layout>
      <FinanceRevenues />
      <FinanceForecast />
      <PaymentStatistics />
    </Layout>
  );
};

export default Finance;
