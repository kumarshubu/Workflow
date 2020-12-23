import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Axios from "axios";
import WorkflowModal from "./WorkflowModal";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "5px 3rem 5px 3rem",
    minHeight: "22vh",
    padding: "20px",
  },
  cards: {
    minHeight: "200px",
    minWidth: "200px",
    background: "#F6F9FA",
    margin: "23px",
    position: "relative",
  },
  centerAll: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  },
}));

function Admin() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("/get")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={22} className={classes.root}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {data.map((res) => {
            return (
              <WorkflowModal data={res.data[0]}/>
            );
          })}
        </div>
      </Paper>
    </div>
  );
}

export default Admin;
