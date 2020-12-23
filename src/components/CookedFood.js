import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./UI/Button.js";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import { BiDonateHeart } from "react-icons/bi"
import Form from "react-bootstrap/Form";

const useStyles = makeStyles(theme => ({
    root: {
        position:"relative",
        
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign:"right",
        fontSize:"6",
        
        '& > *': {
        borderRadius: 7,
          margin: theme.spacing(3),
          width: theme.spacing(25),
          height: theme.spacing(25),
        },
      },
  p: {
    textAlign: "right",
    margin: 20,
  },
  header: {
    textAlign: "right",
    padding: 15,
    fontSize: 20,
    fontWeight: 700,
  },
  form: {
    background: "#FFFFFF",
    borderRadius: 28,
    height: 20,
    width:20,
    padding: "0 5px",
    border: "solid 2px white",
    fontFamily: "'Varela Round', sans-serif",
    fontSize: 20,
    whiteSpace: "nowrap",
    margin: theme.spacing(1),
  },
  formAllergy: {
    background: "#FFFFFF",
    color: "#222222",
    position: "relative",
    borderRadius: 18,
    height: 100,
    border: "solid 6px white",
    padding: "0 15px",
    fontFamily: "'Varela Round', sans-serif",
    fontSize: 15,
    whiteSpace: "nowrap",
    margin: theme.spacing(2),
    
  },

  countinueButton: {
    margin:20,
    paddingTop:25,
    textAlign: "left",
  },
  button: {
    height:30,
    fontSize:13,
    width:25,
}
}));

export default function CookedFood() {
  const [diners, setDiners] = useState('')
  const[allergy, setAllergy] = useState('')
  const classes = useStyles();
  const history = useHistory();

  const usersDetails = [
      {
          id:0,
          name:"רבקה מנשה",
          phone:"05475555555",
          city: "חולון",
          street: "רחוב חטיבת אלכסנדרוני 67",
          apartment: 29,
          floor:7,
      }
  ]

  const user = usersDetails.map((u)=> <li style={{listStyle:"none", margin: 10}}key={u.id}>{u.name} <br/>{u.phone}<br/> {u.city} <br/>{u.street}<br/>דירה {u.apartment} קומה {u.floor}</li>)

  function submit() {
      console.log([{"diners":diners, "allergy":allergy}])
    history.push("/donor/finish");
  }
  return (
    <div className={classes.root}>
      <Box className={classes.header} p={1} bgcolor="#C0EDF2" margin="0">
      אוכל מבושל
        <BiDonateHeart />
      </Box>
     <p className={classes.p}>
         פרטי הלקוח
     </p>
     <p className={classes.p}>
     {user}
     </p>
     <Form>
         מספר סועדים
     <Form.Group controlId="formPhone">
          <Form.Control
            type="number"
            placeholder=""
            className={classes.form}
            value={diners}
            onChange={(e) => setDiners(e.target.value)}
          />

        </Form.Group>
        <Form.Group controlId="feedback">
          <Form.Control type="text" placeholder="אלרגיה לבוטנים" className={classes.formAllergy} value={allergy}
          onChange={(e) => setAllergy(e.target.value)}/>
        </Form.Group>
      </Form>
     <Box  className={classes.countinueButton}>
        <Button
          variant="outlined"
          color="primary"
          onClick={submit}
          className={classes.button}
        >
          עשיתי
        </Button>
      </Box>
      <Box style={{textAlign: "right", margin:20, marginBottom:50}}>
        <a href="all-orders">חזור</a>
        </Box>
    </div>
  );
}
