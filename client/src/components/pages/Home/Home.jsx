import "./Home.css";
import AdminAmountInfo from "../../features/adminAmountInfo/adminAmountInfo"
import AdminChart from '../../features/AdminChart/AdminChart'
import OrderTable from "../../features/ordersTable/ordersTable"
import OrderCircule from "../../features/OrderCircule/OrderCircule";
import UsersCircle from "../../features/UsersCircule/UsersCircule";

function home() {
  return (
    <div className="home">
      <div id="AdminAmountInfo">
      <AdminAmountInfo/>
      </div>
      <div id="profitChart">
      <AdminChart/>
      </div>
      <div id="thirdLevelData">
        <OrderCircule/>
        <UsersCircle/>
        <OrderTable/>
      </div>
    </div>
  );
};

export default home;
