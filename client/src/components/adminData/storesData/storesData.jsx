import "./storesData.css";
import React from "react";
import StoreIcon from '@mui/icons-material/Store';
import {useAdminData} from "../../../contexts/DataContext";


function StoresData() {
  const {stores}=useAdminData()
  return (
    <div className="stores-data">
      <p>stores<StoreIcon/></p>
      <h1>{stores.length}</h1>
    </div>
  );
};

export default StoresData;