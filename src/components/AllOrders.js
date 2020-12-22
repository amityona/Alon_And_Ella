import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./UI/Button.js";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { BiDonateHeart } from "react-icons/bi"

const useStyles = makeStyles(theme => ({

    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign:"center",
        fontSize:"6",
        '& > *': {
          margin: theme.spacing(1),
        //   marginRight: theme.spacing(1),
        //   marginLeft: theme.spacing(2),
          width: theme.spacing(30),
          height: theme.spacing(3),
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
}));

export default function AllOrders() {
  const classes = useStyles();
  const history = useHistory();
  const myOrders = [
      {
          id:0,
          order:"רשימת קניות לחולון",
          date:"15.12.2020"
      },
      {
        id:1,
        order:"אוכל מבושל לרמת-גן",
        date:"15.12.2020"
    }
  ]
  const listMyOrders = myOrders.map((o)=> <Paper key={o.order} onClick={submit}>{o.date} {o.order}</Paper>)
  
  function submit() {
      
  }

  return (
    <div>
      <Box className={classes.header} p={1} bgcolor="#C0EDF2" margin="0">
        הזמנות פתוחות
        <BiDonateHeart />
      </Box>
      <p className={classes.p}>
       (7) הזמנות שלקחתי
      </p>
      <Box className={classes.paper}>
 
{listMyOrders}
      </Box>
      <p className={classes.p}>
       (43) כל ההזמנות הפתוחות
      </p>
      <Box className={classes.paper}>
 
{listMyOrders}
      </Box>
      
    </div>
  );
}
