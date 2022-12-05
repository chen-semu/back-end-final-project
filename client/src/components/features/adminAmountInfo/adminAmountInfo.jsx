import "./adminAmountInfo.css";
import React from "react";
import CitiesData from "../../adminData/citiesData/citiesData";
import OrdersData from "../../adminData/ordersData/ordersData";
import StoresData from "../../adminData/storesData/storesData";
import ProductsData from "../../adminData/productsData/productsData";

function AdminAmountInfo() {
  return (
    <>
      <CitiesData />
      <OrdersData />
      <StoresData />
      <ProductsData />
    </>
  );
}

export default AdminAmountInfo;
