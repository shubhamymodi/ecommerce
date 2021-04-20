import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

import { AiOutlineTeam } from 'react-icons/ai';

import { FcRating } from "react-icons/fc";

import electronics from "./electronics";

import Third from "./third";
import Menu from "./navbar";


import { withStyles } from '@material-ui/core/styles';

import Tooltip from '@material-ui/core/Tooltip';

// ------------------------------------------------------------------------
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  


//   -------------------------------------------------------------------
const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
    },
}));




const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function ElectronicsCard() {
    const classes = useStyles();
    const [i,setI] = React.useState(1);

   
    console.log(electronics);

  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
   
    
  };
  const handleClose = () => {
    setOpen(false);
  };
    
    return (
        <>
        <Menu/>
        <br/>
        
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {electronics.map((card) => (
                            
                            <>
                            
                             
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            
                                            className={classes.cardMedia}
                                            image={card.Image}
                                            title={card.Category}
                                           
                                            
                                        />
                                        <CardContent className={classes.cardContent}>
                                         
                                            <Typography style={{ marginTop: "2%", marginBottom: "5%" }}>
                                                <span style={{ fontStyle: "bold" }}><span style={{  fontWeight:"bold",marginTop: "20%",  }}>{card.Courseprovider}</span></span>
                                            </Typography>


                                            <Button variant="contained" onClick={() => setI(card.Number)} onClick={handleClickOpen} color="primary" size="large" style={{marginLeft:'auto',marginRight:"auto",marginBottom:"10px"}}>
                                                Buy Now
                                                {/* {card.Image} */}
                                            </Button> <br/>
{/* ----------------------------------------------------------------------------------------------------- */}
                                            <Dialog style={{overflow:"hidden"}} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Item Details
        </DialogTitle>
        <DialogContent dividers>
          <div className="row">
          <img className="column" style={{marginLeft:"auto",marginRight:"auto",display:"block"}} src="https://res.cloudinary.com/shubhampersonal/image/upload/v1618769672/laptop_bwlrr6.jpg" alt="dp"/>
          
          </div>
          <br/>
          <span style={{fontWeight:"bold"}}>ASUS ROG Strix G15 (2020) Core i7 10th Gen</span><br/>
          <span style={{fontSize:"30px"}} >₹ {card.Price}</span><br/>
          <div style={{fontWeight:"bold"}}>Features:</div>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</Typography>
          
          <div style={{fontWeight:"bold",textAlign:"center"}}>Client Ratings</div>
 <Box style={{marginLeft:"auto",marginRight:"auto",textAlign:"center"}} component="fieldset" mb={3} borderColor="transparent">
         <Rating defaultValue={electronics[i].Rating} precision={0.5} name="read-only" readOnly />
  </Box>

          
{/* ------------------------------------------------------------------------- */}
 
      
        </DialogContent>
        <DialogActions>
          <Button href="/cart" autoFocus onClick={handleClose} color="primary">
            ADD TO CART
          </Button>
        </DialogActions>
      </Dialog>
{/* 
------------------------------------------------------------------------------------------- */}

                                            
                                            
                                            <Button variant="outlined" color="secondary" style={{ marginLeft: "2%", marginRight: "0%" }}>
                                                Rs{card.Price}
                                            </Button>
                                            <Button variant="outlined" color="secondary" style={{ marginLeft: "1%", marginRight: "0%" }}>
                                                <AiOutlineTeam /> {card.Enrollment}
                                         </Button>
                                            <Button variant="outlined" color="secondary" style={{ marginLeft: "1%" }}>
                                                <FcRating />  <span> <span>{card.Rating}</span></span>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            
                            </>
                        ))}
                    </Grid>
                </Container>
                <Third/>
             
            </main>
        </>

    )
}