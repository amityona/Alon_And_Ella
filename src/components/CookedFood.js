import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Paper from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import StopIcon from '@material-ui/icons/Stop';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({

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

}))


export default function CookedFood() {
  const history = useHistory();
    function handleClick() {
      history.push("/ClientFinish");
    }
    function handleClick2() {
      history.push("/FoodType");
    }
  
    const classes = useStyles();
        return (
            <div>
                       <Box p={1} bgcolor="grey.300" margin="0" textAlign="right">
                   אוכל מבושל<IconButton><PlayArrowIcon onclick={handleClick } style={{ color: grey[900], fontSize: 15  }}></PlayArrowIcon></IconButton>
            </Box>
            <p className={classes.p}>
               אנא מלאו את הפרטים הבאים:
            </p>
            


    <p style={{margin:10, textAlign: "right"}}>
               כשרות
            </p>
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">כשרות</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="כשרות"
        >
          <MenuItem >כשר</MenuItem>
          <MenuItem >לא כשר</MenuItem>
          
        </Select>
      </FormControl>
      <p style={{margin:10, textAlign: "right"}}>
               מספר סועדים
            </p>
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">מספר סועדים</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="מספר סועדים"
        >
          <MenuItem >1-3</MenuItem>
          <MenuItem >4 ומעלה</MenuItem>
          
        </Select>
      </FormControl>
            
      <p className={classes.p}>
            מה עוד חשוב שנדע?
            </p>
            <TextField id="standard-size-small"  size="small" />
            <br/>
            <div style={{textAlign:"center", margin:20}}>
            <Button onClick={handleClick } variant="contained" >המשך</Button>
            <Button onClick={handleClick2 } text-align="center" href="">חזור</Button>
            </div>

            </div>

        )
}