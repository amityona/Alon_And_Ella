import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./UI/Button.js";
import Box from "@material-ui/core/Box";
import { useHistory, useRouteMatch, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { FcHome } from "react-icons/fc";
import { useAuth } from "./Contexts/AuthContext";
import app from "../firebase";
import firebase from "../firebase";
import "firebase/firestore";
import SimpleModal from "./Modal";
import handleOpen from './Modal';


const useStyles = makeStyles((theme) => ({
  form: {
    background: "#C0EDF2",
    color: "#222222",
    position: "relative",
    borderRadius: 28,
    height: 36,
    border: "solid 8px white",
    padding: "0 30px",
    fontFamily: "'Varela Round', sans-serif",
    fontSize: 20,
    whiteSpace: "nowrap",
    margin: theme.spacing(1),
  },

  p: {
    textAlign: "right",
    margin: 50,
  },
  header: {
    textAlign: "right",
    padding: 15,
    fontSize: 20,
    fontWeight: 700,
  },
  countinueButton: {
    paddingTop: 110,
    marginRight: 220,
  },
}));


// main
export default function Home() {
  //fields
  const classes = useStyles();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  const { signUp } = useAuth();
  const [open, setOpen] = useState(false);
  const db = firebase.firestore();
  const [message, SetMessage] = useState("")


  console.log(match);
  console.log(location);


  //methods

  //*primary button click method
  async function submit(e) {
    e.preventDefault();
    console.log([{ name: name, phone: phone }]);

    if (name && phone) {
      try {
        const res = await checkUserDetails(phone);
        if (res === false) {
          console.log("Did not fined user details. created new. waiting approval");
          //  alert("Did not fined user details. created new. waiting approval");
          setTextMsg('Did not fined user details. created new. waiting approval');
          handleOpen();
        }
      } catch (error) { }
    } else {
      alert("יש למלא את כל הפרטים");
    }
  }

  async function checkUserDetails(phone) {
    if (phone) {
      try {
        //gets user from db
        const foundUser = await db.collection("User").where("phoneNumber", "==", phone).get();
        const currentUrl = match.url;

        if (foundUser.empty) { // no user found, create a new one 
          if (currentUrl === '/') {
            console.log('No matching documents');
            await createUser('manager', false);
            return false;
          }
        }

        // user found. checking his details 
        foundUser.forEach(doc => {
          console.log(`User No.: ${doc.id},\nDetails: `, doc.data());
          const user = doc.data();
          if (user) {
            if (currentUrl === '/' && user.role === 'manager') { // checks if he is a manager
              //alert(`User ${user.name} is defined as a Manager. checking if approved`);
              setTextMsg(`User ${user.name} is defined as a Manager. checking if approved`);
              handleOpen();
            } else {
              setTextMsg(`User ${user.name} is not defined as a Manager`);
              handleOpen();
              return;
            }


            if (user.role === 'manager' && user.approved === false) { // checks if he is approved
              //alert(`User ${user.name} is not approved yet`);
              setTextMsg(`User ${user.name} is a Manager but not approved yet`);
              handleOpen();

              return;
            }
            // user is a manager and approved
            else {
              //alert(`Welcome ${user.name}`) 
              setTextMsg(`Welcome ${user.name}`);
              handleOpen();
              let hold = setInterval(() => {
                submitForm();
                clearInterval(hold);
              }, 3000);


            }
          } else if (!user) {
            alert(`User data: ${user} is missing`)
          }
        });

      } catch (error) { }
    } else {
      alert("יש למלא את כל הפרטים");
    }
  }


  //* creates user object
  async function createUser(role, approved) {
    db.collection("User").add({
      name: name,
      phoneNumber: phone,
      role,
      approved,
    });
  }
  //* passes to next page
  function submitForm() {
    history.push("/FoodType");
  }
  //* passes message to modal
  const setTextMsg = msg => {
    SetMessage(msg);
  };
  //* handles modal opening
  const handleOpen = () => {
    setOpen(true);
  };

  /** @param {main render function}  */
  return (
    <div>
      <SimpleModal message={message} open={open} />
      <Box className={classes.header} p={1} bgcolor="#C0EDF2" margin="0">
        עמותת אלון ואלה
        <FcHome />
      </Box>
      <p className={classes.p}>
        שלום,
        <br />
        כדי שנוכל להכניס אותך לאפליקציית אלון ואלה אנו צריכים שם ומספר ליצירת
        קשר
      </p>
      <br />
      <Form noValidate autoComplete="off" >
        <Form.Group controlId="formName">
          <Form.Control type="text" placeholder="שם" className={classes.form} value={name}
            onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Control
            type="phone"
            placeholder="מספר טלפון"
            className={classes.form}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
      </Form>
      <br />
      <Box className={classes.countinueButton}>
        <Button
          color="primary"
          onClick={submit}
        >
          המשך
        </Button>
      </Box>
      <a href="www.google.com">לאתר העמותה</a>
      <br />
    </div>
  );
}
