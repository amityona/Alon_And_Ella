import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import { BiDonateHeart } from "react-icons/bi"
import Button from "./UI/Button.js";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { RadioGroup,FormLabel, Radio, FormControlLabel, Menu, MenuItem, Select, InputLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 5,
    border: 1,
    style: { width: '8rem', height: '8rem' },
  };
const useStyles = makeStyles(theme => ({

    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 150,
            height:48,
        },

    },

    p: {
    textAlign:"right",
    margin:20,
   
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign:"center",
        fontSize:"9",
        '& > *': {
          margin: theme.spacing(1.5),
          width: theme.spacing(11),
          height: theme.spacing(11),
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 100,

      },
      button: {
        '& > *': {
            margin: theme.spacing(1),
          },
      },
      header: {
        textAlign: "right",
        padding: 15,
        fontSize: 20,
        fontWeight: 700,
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 100,

      },
      form: {
        background: "#C0EDF2",
        color: "#222222",
        position: "relative",
        borderRadius: 18,
        height: 200,
        border: "solid 6px white",
        padding: "0 15px",
        fontFamily: "'Varela Round', sans-serif",
        fontSize: 15,
        whiteSpace: "nowrap",
        margin: theme.spacing(2),
        
      },
      countinueButton: {
        margin:20,
        paddingTop:20,
        textAlign: "left",
      },
      button: {
          height:30,
          fontSize:13,
          width:25,
      }

}))


export default function CookedFood() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
    const [feedback, setFeedback] = useState('')
    const classes = useStyles();
    const history = useHistory();
    const [kosher, setKosher] = useState("");
    const [numberOfPeople, setNumberOfPeople] = useState("");
    const [addInformation, setAddInformation] = useState("");
    function submitForm() {
        console.log([{ feedback: feedback}]);
        history.push("/ClientFinish");
    }
    function handleClick() {
      history.push("/CookedFood");
    }
    function handleClick2() {
      history.push("/FoodType");
    }
    function submit() {
      console.log([{ name: name, phone: phone }]);
      if (numberOfPeople && addInformation) {
        return submitForm();
      } else {
        alert("יש למלא את כל הפרטים");
      }
    }

        return (
            <div>
                        <Box className={classes.header} p={1} bgcolor="#C0EDF2" margin="0">
      אוכל מבושל
        <BiDonateHeart/>
      </Box>
            <p className={classes.p}>
        אנא מלאו את הפרטים הבאים:
            </p>
            <FormControl component="fieldset">
      <FormLabel component="legend">כשרות</FormLabel>
  <RadioGroup aria-label="כשרות" name="כשרות" >
    <FormControlLabel value="kosher" control={<Radio />} label="כשר" onChange={(e) => setKosher(e.target.value)} />
    <FormControlLabel value="kosher" control={<Radio />} label="לא כשר" onChange={(e) => setKosher(e.target.value)} />
    
    
  </RadioGroup>
</FormControl>
<InputLabel id="label">מספר סועדים</InputLabel>
<Select labelId="label" id="select" value="name">
  <MenuItem onChange={(e) => setNumberOfPeople(e.target.value)} value="numberOfPeople">1-3</MenuItem>
  <MenuItem onChange={(e) => setNumberOfPeople(e.target.value)} value="numberOfPeople">4 ומעלה</MenuItem>
</Select>
            <p className={classes.p}>
      מה עוד חשוב שנדע?
            </p>
            <Form  noValidate autoComplete="off">

        <Form.Group controlId="formPhone">
          <Form.Control
            type="phone"
            placeholder=" אלרגיים למשהו?"
            className={classes.form}
            value={addInformation}
            onChange={(e) => setAddInformation(e.target.value)}
          />
        </Form.Group>
      </Form>
         
       

            <Box  className={classes.countinueButton}>
        <Button
          variant="outlined"
          color="primary"
          onClick={submit} 
          className={classes.button}
        >
         המשך
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClick2} 
          className={classes.button}
        >
         חזור
        </Button>
      </Box>
            </div>
        )
}