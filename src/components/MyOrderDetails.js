import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./UI/Button.js";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { BiDonateHeart } from "react-icons/bi"

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
  footer: {
    textAlign: "right",
    padding: 10,
    // position:"fixed",
  },
  countinueButton: {
    margin:20,
    paddingTop:80,
    textAlign: "left",
  },
}));

export default function MyOrderDetails() {
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

  const products = [
      {
        id:0,
        product: "נייר טואלט",
        quantity: 1,
      },
      {
          id:1,
          product:"אורז",
          quantity: 2,
      },
      {
        id:2,
        product:"חלב",
        quantity: 3,
    },
  ]

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

  const listMyOrders = myOrders.map((o)=> <li key={o.order}>{o.date} {o.order}</li>)
  const listProducts = products.map((p)=> <li style={{listStyle:"none", margin: 10}}key={p.product}>{p.product} {p.quantity}<hr/></li>)
  const user = usersDetails.map((u)=> <li style={{listStyle:"none", margin: 10}}key={u.id}>{u.name} <br/>{u.phone}<br/> {u.city} <br/>{u.street}<br/>{u.apartment} {u.floor}</li>)

  function submit() {
    history.push("/donor/all-orders");
  }
  return (
    <div className={classes.root}>
      <Box className={classes.header} p={1} bgcolor="#C0EDF2" margin="0">
      פרטי הזמנה בטיפולי
        <BiDonateHeart />
      </Box>
      <p className={classes.p}>
       {listMyOrders}
      </p>
     <p className={classes.p}>
         פרטי הלקוח
     </p>
     <p className={classes.p}>
     {user}
     </p>
     
      <Box className={classes.paper}>
 <Paper elevation={3}>
{listProducts}
</Paper>
      </Box>
    <Box className={classes.footer} p={1} bgcolor="#C0EDF2" margin="0">
      <Box  className={classes.countinueButton}>
        <Button
          variant="outlined"
          color="primary"
          onClick={submit}
        >
          עשיתי
        </Button>
      </Box>
      <Box style={{textAlign: "right", margin:20, marginBottom:50}}>
        <a href="all-orders">חזור</a>
        </Box>
        </Box>
    </div>
  );
}
