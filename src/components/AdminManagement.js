import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({ 
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
 
  },
  nested: {
    paddingLeft: theme.spacing(4),
    textAlign: 'right',
    backgroundColor : 'lightgray',
    border: '1px solid black',
    borderRadius: '10px',
    margin: '5px'
  },
  itemList: {
    backgroundColor : 'gray',
    textAlign: 'right',
    borderRadius: '10px',
    border: '1px solid black',
    flexdirection : 'column',
    alignItems : 'center'
  },

  btn : {
     backgroundColor : 'yellow',
     borderRadius : '10px'

  },

})); 


export default function AdminManagment() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const history = useHistory();

  const handleClick = () => {
    setOpen(!open);
  };

  const handlebtn = () => {
    history.push("/admin/assigmenttodonation");
  }

  return (
 <Container maxWidth = 'sm' >
    <List component="nav"aria-labelledby="nested-list-subheader"subheader={ 
      <ListSubheader component="div" id="nested-list-subheader">
        ניהול
        </ListSubheader>
      }
   
    >
      <ListItem button className = {classes.ListItem} onClick={handleClick}>

       
        
        <ListItemText primary="ממתין לאישור"  />
    
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem  className={classes.nested}>
           
            <ListItemText primary="בקשה מס' 1"  />
            <Button onClick={handlebtn} className={classes.btn} color="primary">שיוך לתרומה </Button>
          </ListItem>
          <ListItem  className={classes.nested}>
        
            <ListItemText primary="בקשה מס' 2" />
            <Button onClick={handlebtn} className={classes.btn} color="primary">שיוך לתרומה </Button>
          </ListItem>
          <ListItem  className={classes.nested}>
            
            <ListItemText primary="בקשה מס' 3" />
            <Button onClick={handlebtn} className={classes.btn} color="primary">שיוך לתרומה </Button>
          </ListItem>
          <ListItem  className={classes.nested}>
            <ListItemText primary="בקשה מס' 4" />
            <Button onClick={handlebtn} className={classes.btn} color="primary">שיוך לתרומה </Button>
          </ListItem>
        </List> 
      </Collapse>
      <ListItem button className = {classes.itemList} onClick={handleClick}>
       
        <ListItemText primary="ממתין למתנדב" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
           
            <ListItemText primary="ממתין למתנדב מס' 1" />
          </ListItem>
          <ListItem button className={classes.nested}>
       
            <ListItemText primary="ממתין למתנדב מס' 2" /> 
          </ListItem>
          <ListItem button className={classes.nested}>
        
            <ListItemText primary="ממתין למתנדב מס' 3" />
          </ListItem>
          <ListItem button className={classes.nested}>
       
            <ListItemText primary=" ממתין למתנדב מס' 4" />
          </ListItem>
        </List> 
      </Collapse>
      <ListItem button className = {classes.itemList} onClick={handleClick} >
        
        <ListItemText primary="בביצוע" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
       
            <ListItemText primary="פעולה בביצוע מס'1" />
          </ListItem>
        </List> 
      </Collapse>
      <ListItem button className = {classes.itemList} onClick={handleClick}>
  
        <ListItemText primary="הסתיימו" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
          
            <ListItemText primary="פעולה שהתסיימה מס' 1" />
          </ListItem>
        </List> 
      </Collapse>
    </List>
    </Container>

  );
}

        // </div>
     

    
//     )
// }

