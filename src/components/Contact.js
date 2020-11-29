import React from "react"
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 150,
            height:48,
        },
    },
    
    button: {
        margin:theme.spacing(1),
        background: '#808080',
        color:"#FFFFFF",
        position:"relative",
        borderRadius:10,
        width: 90,
        height: 30,
    },
    p: {
    textAlign:"right",
    margin:50,
    },
}))

export default function Contact() {
    
const classes = useStyles();
    return (
        <div>
                <Box p={1} bgcolor="grey.300" margin="0">
                עמותת אלון ואלה
        </Box>
        <p className={classes.p}>שלום,<br/>
            כדי שנוכל להכניס אותך לאפליקציית אלון ואלה אנו צריכים שם ומספר ליצירת קשר
        </p>
        <br/>
        <form className={classes.root} noValidate autoComplete="off">
<TextField
    id="outlined-secondary"
    label="שם"
    variant="outlined"
    color="primary"
  />
  <br/>
  <TextField
    id="outlined-secondary"
    label="מספר טלפון"
    variant="outlined"
    color="primary"
  />
  <br/>
  <Button variant="outlined" size="medium" color="primary" className={classes.button}>
המשך
</Button>
<br/>
<div>
        <Button text-align="center" href="">לאתר העמותה</Button>
        </div>
        </form>
        
</div>
    )
}