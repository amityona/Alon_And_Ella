import React, { Component } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { grey } from '@material-ui/core/colors';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

}))


export default function AddressDetails() {
    
    const classes = useStyles();
        return (
            <div>
                       <Box p={1} bgcolor="grey.300" margin="0" textAlign="right">
                       <IconButton><PlayArrowIcon style={{ color: grey[900], fontSize: 15  }}></PlayArrowIcon></IconButton>איפה אתם
            </Box>
            <p className={classes.p}>
             אנא מלאו כתובת למסירה
            </p>

            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">עיר</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="עיר"
        >
          <MenuItem >ירושלים</MenuItem>
          <MenuItem >תל אביב</MenuItem>
          <MenuItem >חיפה</MenuItem>
        </Select>
      </FormControl>
      <form className={classes.root} noValidate autoComplete="off">
  <TextField id="outlined-basic" label="רחוב" variant="outlined" size="small"/>
  <TextField id="outlined-basic" label="מספר" variant="outlined" size="small"/>
  <TextField id="outlined-basic" label="שכונה" variant="outlined" size="small"/>
  <TextField id="outlined-basic" label="דירה" variant="outlined" size="small"/>
  <TextField id="outlined-basic" label="קומה" variant="outlined" size="small"/>
</form>

<p className={classes.p}>
             יש מעלית?
            </p>
            <div className={classes.button}>
            <Button variant="contained">כן</Button>
            <Button variant="contained">לא</Button>
            </div>
                   
      <p className={classes.p}>
            פרטים נוספות
            </p>
            <TextField id="standard-size-small"  size="small" />
            <br/>
            <div style={{textAlign:"center", margin:20}}>
            <Button variant="contained" >המשך</Button>
            <Button text-align="center" href="">חזור</Button>
            </div>

</div>
        )
}