import "./ordersTable.css";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useAdminData} from "../../../contexts/DataContext";


function createData(orderNum, numOfItems, date, profit) {
  return { orderNum, numOfItems, date, profit };
}



export default function DenseTable() {
  const rows = [];
    const{orders}=useAdminData()
    orders.map((order,index)=>{if(index>3){return}rows.push(createData(order.orderNum, order.numOfItems, order.date, order.profit))})
  return (
    <TableContainer  id="ordersTable" component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>order number</TableCell>
            <TableCell align="right">order number of items</TableCell>
            <TableCell align="right">date&nbsp;</TableCell>
            <TableCell align="right">profit&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.orderNum}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.orderNum}
              </TableCell>
              <TableCell align="right">{row.numOfItems}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.profit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

