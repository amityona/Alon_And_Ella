import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react';


<<<<<<< HEAD
const useStyles = makeStyles(theme => ({

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

    p: {
    textAlign:"right",
    margin:20,
    },
}))

export default function FoodTransfer() {
    
    const classes = useStyles();
        return (
            <div>
                    <Box p={1} bgcolor="grey.300" margin="0" textAlign="right">
             שינוע מזון
            </Box>
            <p className={classes.p}>
               נא פרט את בקשתך
            </p>
<div className={classes.paper}>
    
      <Paper elevation={3}>      <IconButton >
<FastfoodIcon style={{ color: grey[900], fontSize: 35  }}></FastfoodIcon>
</IconButton>
<br/>
חזור</Paper>
      <Paper elevation={3}>
      <IconButton>
<DeckIcon style={{ color: grey[900], fontSize: 35 }}></DeckIcon>
</IconButton>
<br/>
מחק
      </Paper>
      <Paper elevation={3}>
      <IconButton>
      <PowerIcon style={{ color: grey[900], fontSize: 35  }}></PowerIcon>
</IconButton>
<br/>
בוצע
      </Paper>
      <Paper elevation={3}>
      <IconButton>
<LocationOnIcon style={{ color: grey[900], fontSize: 35 }}></LocationOnIcon>
</IconButton>
</Paper>
</div>
</div>
)
    }
=======
export default function FoodTransfer() {}
>>>>>>> 1fca2218878ae7f4992b1c273e642f3c970d45ec
