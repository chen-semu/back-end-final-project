import "./UsersCircule.css";
import React from "react";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import {useAdminData} from '../../../contexts/DataContext'

function countObj(array,sum){
  array.map(user=>{if(user.active){sum=sum+1}})
  return sum
}

function UserCircle() {
  const{users}=useAdminData()
    let sum =0
    sum=countObj(users,sum)
  return (
<div id="orderCircule">
<CircularProgressbarWithChildren value={sum} maxValue={users.length}>
  <div style={{ padding:25 ,fontSize: 22, marginTop: -5 }}>
    <strong>{sum} active users</strong> out of {users.length} users
  </div>
</CircularProgressbarWithChildren>
</div>
);
};

export default UserCircle;
