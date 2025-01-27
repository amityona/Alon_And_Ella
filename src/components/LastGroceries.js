import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import { BiDonateHeart } from "react-icons/bi"
import Button from "./UI/Button.js";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import firebase from "../firebase";

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
    pi: {
        textAlign:"right",
        margin:30,
        fontSize:22,
       
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
export default function LastGroceries() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
    const [feedback, setFeedback] = useState('')
    const classes = useStyles();
    const history = useHistory();
    function handleClick() {
        history.push("/ClientFinish");
      }
      function handleClick2() {
        history.push("/Groceries");
      }

    function submitForm() {
        console.log([{ feedback: feedback}]);
        history.push("/Groceries");
      }
      function submit() {
        console.log([{ name: name, phone: phone }]);
        if (name && phone) {
          return submitForm();
        } else {
          alert("יש למלא את כל הפרטים");
        }
      }

        return (
            <div>
                        <Box className={classes.header} p={1} bgcolor="#C0EDF2" margin="0">
        סיום
        <BiDonateHeart/>
      </Box>
            <p className={classes.pi}>
        אילו מצרכים תרצו?
            </p>
            <p className={classes.p}>
    הנה הההזמנה הקודמת שלכם:
            </p>
            
      <Form  noValidate autoComplete="off">
       

        <Form.Group controlId="formPhone">
          <Form.Control
            type="phone"
            placeholder="הזמנה קודמת"
            className={classes.form}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
      </Form>
            
            <Box  className={classes.countinueButton}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClick} 
          className={classes.button}
        >
         המשך
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={submit} 
          className={classes.button}
        >
         חזור
        </Button>
      </Box>

     
            </div>
        )
}