import "./productsData.css";
import React from "react";
import InventoryIcon from '@mui/icons-material/Inventory';
import {useAdminData} from "../../../contexts/DataContext";

function ProductsData() {
  const {products}=useAdminData()
  return (
    <div className="products-data">
      <p>pruducts<InventoryIcon/></p>
      <h1>{products.length}</h1>
    </div>
  );
};

export default ProductsData;
