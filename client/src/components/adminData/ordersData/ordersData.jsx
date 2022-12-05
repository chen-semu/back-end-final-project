import "./ordersData.css";
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useAdminData} from "../../../contexts/DataContext";

function OrdersData() {
  const{orders}=useAdminData()
  return (
    <div className="orders-data">
      <p>orders<ShoppingCartIcon/></p>
      <h1>{orders.length}</h1>
      </div>
  );
};

export default OrdersData;
