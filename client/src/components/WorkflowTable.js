import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 5),
  createData("Eclair", 262, 16.0),
  createData("Cupcake", 305, 3.7),
  createData("Gingerbread", 356, 16.0),
];

export default function BasicTable({ data }) {
  const classes = useStyles();
  console.log(data[1]);
  const [approval, setApproval] = useState([]);
//   console.log(data.result);

  useEffect(() => {
    let x = new Map();
    data[1][0].approval.map((res) => {
      console.log(res);
    });
    //   console.log(x);
    setApproval(data[1][0].approval);
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "800" }} align="center">Users</TableCell>
            <TableCell style={{ fontWeight: "800" }} align="center">
              Approval Action
            </TableCell>
            <TableCell style={{ fontWeight: "800" }} align="center">
              Workflow Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data[1].map((row, i) => {
            {
              if (typeof row != "string") return;
              //   console.log(row);
            }
            return (
              <TableRow key={i}>
                <TableCell align="center" component="th" scope="row">
                  {row}
                </TableCell>
                {approval.map((res) => {
                    // console.log(res[0]==row)
                  if(res[0] != row)
                  {
                    return;
                  }
                  return (<TableCell align="center">{res[1]}</TableCell>)
                })}
                {approval.map((res) => {
                  if(res[0] != row)
                  {
                    return;
                  }
                  if(data.result=="Terminated") 
                  return (<TableCell align="center">"-"</TableCell>)
                  else if(data.result!="Terminated")
                  return (<TableCell align="center">{res[1]=="Approved"?"Active":res[1]=="Rejected"?"Terminated":res[1]=="Reject & Remove from workflow"?"Active":"-"}</TableCell>)
                })}                
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
