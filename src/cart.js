import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const useStyles2 = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
    '& .MuiBadge-root': {
      marginRight: theme.spacing(4),
    },
  },
}));

function createData(cart, price) {
  return { cart, price };
}



export default function Cart(props) {
  function createData(cart, price) {
    return { cart, price };
  }
  const [count, setCount] = React.useState(1);
  const rows = [
    createData("Notebook", count*Number("40")),
    createData('Delivery Charges', "10"),
   
  ];
  
  const classes = useStyles();
  const classes2 = useStyles2();
  
  let total = (Number(count)*Number("40")) + Number("10");
  return (
    <>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:"bold"}} align="center">My Cart</TableCell>
            <TableCell style={{fontWeight:"bold",color:"#888"}} align="left">PRICE DETAILS</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            <TableRow style={count==0 ? {display:"none"} : null} key={row.cart}>
              <TableCell align="center" component="th" scope="row">
                {row.cart}
              </TableCell>
              <TableCell align="left">{row.price}</TableCell>
              
            </TableRow>            
          ))}

          {/* <TableRow>
            <TableCell align="center"><div>Delivery Charges</div></TableCell>
            <TableCell><div>Rs x</div></TableCell>

          </TableRow> */}

          <TableRow>
            <TableCell align="center">
            <div className={classes2.root}>
      <div>
        <Badge color="secondary" badgeContent={count}>
          <ShoppingCartIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      
    </div>


            </TableCell>
            <TableCell>              
            <div>
              <span style={{marginRight:"10%"}}>Total Amount</span>
              <span style={{marginLeft:"10%"}}>{count==0 ? 0 : total}</span>
            </div>
            
            
            
            </TableCell>

          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Button style={{marginLeft:"37%",marginTop:"20px"}} variant="contained" color="primary">
  PLACE ORDER
</Button>
    </>
  );
}