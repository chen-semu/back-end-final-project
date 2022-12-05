import "./OrderCircule.css";
import React from "react";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import {useAdminData} from "../../../contexts/DataContext"

function countObj(array,sum){
  array.map(order=>{if(!order.purchaseErr && !order.clientDecline){sum=sum+1}})
  return sum
}

function OrderCircule() {
  const{orders}=useAdminData()
    let sum =0
    sum=countObj(orders,sum)
  return (
<div id="orderCircule">
<CircularProgressbarWithChildren value={sum} maxValue={orders.length}>
  <div style={{ fontSize: 24, marginTop: -5 }}>
    <strong>{sum}</strong> out of {orders.length}
  </div>
</CircularProgressbarWithChildren>
</div>
);
};

export default OrderCircule;
