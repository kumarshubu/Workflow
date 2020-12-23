import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Level from "./Level";
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxHeight:"90vh",
    overflowY:"scroll"

  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [submit, setSubmit] = useState(false);
  const [levelCount, setLevelCount] = useState([1]);
  const [vendor,setVendor] = useState("");
  const [send,setSend] = useState(false);

  let data = new Map();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setLevelCount([1]);
  };

  useEffect(() => {
    if (data)
    {
      //console.log(data)

    }
  }, [data]);

  useEffect(()=>{
    //console.log(data)
    if(data.has("vendor"))
    {
      data.delete("vendor");
    }
    data["vendor"]=vendor;
    data["result"]="active";

  },[vendor,data])

  useEffect(()=>{
    if(submit)
    {
      Axios.post("/createWorkflow",{data})
      .then(res=>{
        console.log(res)
        window.location.href="/"
      })
      .catch(err=>console.log(err))

      setSubmit(false);
    }
  },[submit])
  return (
    <div>
      <Button
        type="button"
        onClick={handleOpen}
        style={{ background: "#53AF50", color: "#fff" }}
      >
        Create New Workflow
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} maxWidth="sm">
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <div style={{ display: "flex", justifyContent: "flex-start",flexDirection:"row" }}>
              <TextField onChange={(e)=>{setVendor(e.target.value)}} label="Vendor Name" />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" ,flexDirection:"row"}}>
                <Button style={{ background: "#53AF50", color: "#fff" }} onClick={()=>setLevelCount(prev=>{return [...prev,prev+1]})}>
                  Add Level
                </Button>
              </div>
            </div>
            {levelCount.map((res,i)=>{
              return (<Level data={data} submit={submit} level={i+1} />)
            })}

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                style={{ background: "#53AF50", color: "#fff" }}
                onClick={() => {setSubmit(true);handleClose()}}
              >
                Create
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
