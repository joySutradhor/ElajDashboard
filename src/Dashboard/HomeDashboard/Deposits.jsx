import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


function preventDefault(event) {
  event.preventDefault();
}

// eslint-disable-next-line react/prop-types
export default function Deposits({ darkMode }) {
  return (
    <React.Fragment>

      <h3 className={`${darkMode ? 'darkSubHeading ' : 'subHeading '
        } text-md  `} >Hospital Revenue</h3>
      <Typography className={`${darkMode ? 'priceColor ' : 'priceColor'
        } text-xl  `} component="p" >

        $3,024.00
      </Typography>
      <div className='mt-[15px] '>
        <Link
          sx={{
            color: darkMode ? '#9a9a9a' : '#9a9a9a',
            textDecoration: 'none', // Remove underline by default
            textAlign: 'end', // Align text to the end
            '&:hover': {
              textDecoration: 'underline', // Show underline on hover
              textDecorationColor: darkMode ? '#9a9a9a' : '#9a9a9a', // Set underline color on hover
              textUnderlineOffset: "5px"
            },
          }}

          href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}