import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'Available',
    'Average',
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'Leave',
    "Very Good",
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'Available',
    'Not Enough',
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'On Leave',
    'Average',
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'Not available',
    'Good',
  ),
 
];

function preventDefault(event) {
  event.preventDefault();
}

// eslint-disable-next-line react/prop-types
export default function Orders({darkMode}) {
  return (
    <React.Fragment>
      <h3 className={`${darkMode ? 'text-[#A5ACBA]' : 'text-[#333333]'
        } text-md font-nunito `} >Doctors Availability</h3>
      <Table size="small">
        <TableHead>
          <TableRow >
            <TableCell sx={{color: darkMode ? "#9a9a9a" : "#9a9a9a" , borderBottom: 'none'}} >Date</TableCell>
            <TableCell sx={{color: darkMode ? "#9a9a9a" : "#9a9a9a" , borderBottom: 'none'}}>Name</TableCell>
            <TableCell sx={{color: darkMode ? "#9a9a9a" : "#9a9a9a" , borderBottom: 'none'}} >Speciality</TableCell>
            <TableCell sx={{color: darkMode ? "#9a9a9a" : "#9a9a9a" , borderBottom: 'none'}}>Availability</TableCell>
            <TableCell sx={{color: darkMode ? "#9a9a9a" : "#9a9a9a" , borderBottom: 'none'}} align="right">Feedback</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} sx={{ border: 'none' }} >
              <TableCell sx={{color: darkMode? "#9a9a9a" : "#9a9a9a" , borderBottom: 'none'}}>{row.date}</TableCell>
              <TableCell sx={{color: darkMode? "#9a9a9a" : "#9a9a9a" , borderBottom: 'none'}} >{row.name}</TableCell>
              <TableCell sx={{color: darkMode? "#9a9a9a" : "#9a9a9a" , borderBottom: 'none'}} >{row.shipTo}</TableCell>
              <TableCell sx={{color: darkMode? "#9a9a9a" : "#9a9a9a" , borderBottom: 'none'}} >{row.paymentMethod}</TableCell>
              <TableCell sx={{color: darkMode? "#9a9a9a" : "#9a9a9a" , borderBottom: 'none'}} align="right">{`${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link  href="#" onClick={preventDefault} 
       sx={{
        mt: 3,
        color: darkMode? '#9a9a9a' : '#9a9a9a',
        textDecoration: 'none', // Remove underline by default
        textAlign: 'end', // Align text to the end
        '&:hover': {
          textDecoration: 'underline', // Show underline on hover
          textDecorationColor: darkMode? '#9a9a9a' : '#9a9a9a', // Set underline color on hover
          textUnderlineOffset : "5px"
        },
      }}
      >
        See more 
      </Link>
    </React.Fragment>
  );
}