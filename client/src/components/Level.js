import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";

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
  },
  centerAll: {
    // position: "absolute",
    // top: "50%",
    // transform: "translateY(5%)",
    paddingTop: "4px",
  },
}));

function Level({ data, submit,level }) {
  const classes = useStyles();

  const [elsaIngram, setElsaIngram] = useState(false);
  const [paulMarsh, setPaulMarsh] = useState(false);
  const [dJoshi, setDJoshi] = useState(false);
  const [nickHolden, setNickHolden] = useState(false);
  const [john, setJohn] = useState(false);

  const [levelData, setLevelData] = useState("");
  const [select,setSelect] = useState("");

  useEffect(() => {
    console.log(data, levelData);
    // if (data) {
    //   setData([...data, levelData]);
    // } else 
    if(levelData!="") 
    {
        let x = levelData;
        x.unshift({level:level,type:select,approval:[{elsaIngram:""},{paulMarsh:""},{dJoshi:""},{nickHolden:""},{john:""}]})
        data[level]= x;
        }
  }, [submit]);

  // useEffect(() => {
  //   // console.log(levelData);
  //   // if(data.has(level))
  //   // {
  //   //     data.delete(level);
  //   //     let x = levelData;
  //   //     x.unshift({level:level,type:select})
  //   //     data[level]= x;
        
  //   // }
  // }, [levelData]);

  const handleElsa = (e) => {
    let name = e.target.name;
    setElsaIngram((prev) => {
      if (!prev) setLevelData([...levelData, name]);
      else {
        levelData.map((res, i) => {
          if (res == name) {
            let x = levelData;
            x.splice(i, 1);
            setLevelData(x);
          }
        });
      }

      return !prev;
    });
  };
  const handlepaulMarsh = (e) => {
    let name = e.target.name;
    setPaulMarsh((prev) => {
      if (!prev) setLevelData([...levelData, name]);
      else {
        levelData.map((res, i) => {
          if (res == name) {
            let x = levelData;
            x.splice(i, 1);
            setLevelData(x);
          }
        });
      }
      return !prev;
    });
  };
  const handledJoshi = (e) => {
    let name = e.target.name;
    setDJoshi((prev) => {
      if (!prev) setLevelData([...levelData, name]);
      else {
        levelData.map((res, i) => {
          if (res == name) {
            let x = levelData;
            x.splice(i, 1);
            setLevelData(x);
          }
        });
      }

      return !prev;
    });
  };
  const handlenickHolden = (e) => {
    let name = e.target.name;
    setNickHolden((prev) => {
      if (!prev) setLevelData([...levelData, name]);
      else {
        levelData.map((res, i) => {
          if (res == name) {
            let x = levelData;
            x.splice(i, 1);
            setLevelData(x);
          }
        });
      }

      return !prev;
    });
  };
  const handlejohn = (e) => {
    let name = e.target.name;
    setJohn((prev) => {
      if (!prev) setLevelData([...levelData, name]);
      else {
        levelData.map((res, i) => {
          if (res == name) {
            let x = levelData;
            x.splice(i, 1);
            setLevelData(x);
          }
        });
      }

      return !prev;
    });
  };
  return (
    <div
      style={{
        backgroundColor: "#cfe8fc",
        margin: "5px 0px",
        padding: "4px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div className={classes.centerAll}>Level {level}</div>
        </div>
        <div>
          <div>
            Approval Type :
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              // value={}
              onChange={e=>setSelect(e.target.value)}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Sequential">Sequential</MenuItem>
              <MenuItem value="RoundRobin">Round-robin</MenuItem>
              <MenuItem value="AnyOne">Any one</MenuItem>
            </Select>
          </div>
        </div>
      </div>
      <div>
        <Divider />
        <FormGroup
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: "0px 5px",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={elsaIngram}
                onChange={handleElsa}
                name="elsaIngram"
              />
            }
            label="Elsa Ingram"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={paulMarsh}
                onChange={handlepaulMarsh}
                name="paulMarsh"
              />
            }
            label="Paul Marsh"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={dJoshi}
                onChange={handledJoshi}
                name="dJoshi"
              />
            }
            label="D Joshi"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={nickHolden}
                onChange={handlenickHolden}
                name="nickHolden"
              />
            }
            label="Nick Holden"
          />
          <FormControlLabel
            control={
              <Checkbox checked={john} onChange={handlejohn} name="john" />
            }
            label="John"
          />
        </FormGroup>
      </div>
    </div>
  );
}

export default Level;
