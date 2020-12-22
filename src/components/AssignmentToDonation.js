import React from 'react';
import { Container } from '@material-ui/core';
 import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
 description : {
     height : '60%'
 }
    }));



export default function AssignmentToDonation() {
     const classes = useStyles();
 return(
    
     <Container maxWidth = 'sm'>
          {/* <div  style= {{h}}>  */}
         <h4>
             פלוני אלמוני
         </h4>      
         <h4>
               בקשת מזון
         </h4>
          {/* </div> */}
             עברו 4 ימים מאז הבקשה

             <p className = {classes.description}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

     </Container>
 )
}