import "./citiesData.css";
import React from "react";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import {useAdminData} from "../../../contexts/DataContext";


function CitiesData() {
  const{cities}=useAdminData()
  return (
    <div className="cities-data">
      <p>cities <LocationCityIcon/></p>
      <h1>{cities.length?cities.length:"dddd"}</h1>
    </div>
  );
};

export default CitiesData;
