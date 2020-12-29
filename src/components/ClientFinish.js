import React, { Component } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { grey } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
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

}))


export default function ClientFinish() {
    
    const classes = useStyles();
        return (
            <div>
                       <Box p={1} bgcolor="grey.300" margin="0" textAlign="right">
                       <IconButton><PlayArrowIcon style={{ color: grey[900], fontSize: 15  }}></PlayArrowIcon></IconButton>
            </Box>
            <Box borderRadius="borderRadius" {...defaultProps}>
            <p className={classes.p}>
            תודה, שמרנו את הבקשה שלך.
            ניצור איתך קשר בהמשך.
            </p>
            <div style={{textAlign:"center", margin:20}}>
            <Button variant="contained" >המשך</Button>
            </div>
            </Box>
            </div>
        )
}