import React, {useState} from 'react'
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

export default function FoodDetails() {
  const foodTypes = [
    {
      id: 0,
      name: "uncooked",
    },
    {
      id: 1,
      name: "cooked",
    },
  ]

    const[foodType, setFoodType] = useState(foodTypes[0])
    const[kashrut, setKashrut] = useState('')
    const[allergy, setAllergy] = useState('')
    const[more, setMore] = useState('')
    const classes = useStyles();
    const history = useHistory()

    function submitFoodType(i) {
      setFoodType(foodTypes[i])
    }

    const selectKashrut = (event) => {

      setKashrut(event.target.value)
    };

    function submitForm() {
      history.push("/donor/address-details");
    }

    function submitFood() {
      console.log([
        {"foodType": foodType.name, "kashrut":kashrut, "allergy": allergy,  "more": more }
      ])

      if(foodType && kashrut && allergy) {
        return submitForm()
         
        }else {
            alert("יש למלא את כל הפרטים")
        }
        
    }

        return (
            <div>
                       <Box p={1} bgcolor="grey.300" margin="0" textAlign="right">
                   לקבל מזון<IconButton><PlayArrowIcon style={{ color: grey[900], fontSize: 15  }}></PlayArrowIcon></IconButton>
            </Box>
            <p className={classes.p}>
               איזו מזון אתם צריכים?
            </p>
            
<div className={classes.paper}>
<Paper elevation={3} onClick={submitFoodType.bind(this, 0)}>
    <IconButton> {" "}
<StopIcon style={{ color: grey[900], fontSize: 40 }}></StopIcon>
</IconButton>
<br/>
מצרכים
    </Paper>
    <Paper elevation={3} onClick={submitFoodType.bind(this, 1)}>      <IconButton >
<FiberManualRecordIcon style={{ color: grey[900], fontSize: 40  }}></FiberManualRecordIcon>
</IconButton>
<br/>
מבושל</Paper>
    </div>

    <p style={{margin:10, textAlign: "right"}}>
               כשרות
            </p>
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">כשרות</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="כשרות"
          value={kashrut}
          onChange={selectKashrut}
        >
          <MenuItem value={"mehadrin"}>מהדרין</MenuItem>
          <MenuItem value={"rabanut"}>רבנות</MenuItem>
          <MenuItem value={"badatz"}>בד"ץ</MenuItem>
        </Select>
      </FormControl>

      <p className={classes.p}>
             האם יש אלרגיה כלשהי?
            </p>
            <div className={classes.button} >
            <Button variant="contained" onClick={() => { setAllergy('allergy'); }}>כן</Button>
            <Button variant="contained" onClick={() => { setAllergy('no allergy'); }} >לא</Button>
            </div>
            
      <p className={classes.p}>
            בקשות נוספות
            </p>
            <TextField id="standard-size-small" 
            size="small" 
            value={more} 
            onChange={(e) => setMore(e.target.value)}
            />
            <br/>
            <div style={{textAlign:"center", margin:20}}>
            <Button variant="contained"  onClick={submitFood}>המשך</Button>
            <Button text-align="center" href="">חזור</Button>
            </div>

            </div>

        )
}