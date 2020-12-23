import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from "@material-ui/core/Paper";
import WorkflowTable from "./WorkflowTable";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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

export default function TransitionsModal({data}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        react-transition-group
      </button> */}
      <Paper type="button" onClick={handleOpen} className={classes.cards} elevation={3}>
				  <div style={{ display: "flex", justifyContent: "center" }}>
				  <div className={classes.centerAll}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div
                      style={{
                        textTransform: "uppercase",
                        fontSize: "25px",
                        fontWeight: "800",
                        color: "#5568ca",
                      }}
                    >
                      {data.vendor}
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div
                      style={{
                        textTransform: "uppercase",
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "red",
                      }}
                    >
                      {data.result}
                    </div>
                  </div>
                </div>
					  
				  </div>
              </Paper>
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
          <div className={classes.paper}>
            <WorkflowTable data={data}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}