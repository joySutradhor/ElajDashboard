
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, LinearProgress } from '@mui/material';
import { useState } from 'react';
import { Visibility } from '@mui/icons-material';
// import "./signUp.css"

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  // all states are there 
  const [value, setValue] = React.useState(0);
  const [password, setPassword] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordSignIn, setShowPasswordSignIn] = useState(false);

  // Tabs value changes
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // password change by Onchange because it is wrapped by fromcontrol
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPasswordSignIn(newPassword);
    console.log("Password dynamically:", newPassword);
  };

  // form data get by Onsubmit 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    console.log(email, password);
   
  };

  // form data get by Onsubmit for sign In  
  const handleSubmitSignIn = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    console.log(email, passwordSignIn);

    // checking credential by conditon 
    if (email === 'admin@gmail.com' && passwordSignIn === '1234') {
      alert("Your are admin")
      window.location.href = '/home';
    } else if (email === 'superadmin@gmail.com' && passwordSignIn === '1234') {
      alert('Your are super Admin ');
    }
    else if (email === 'representive@gmail.com' && passwordSignIn === '1234') {
      alert('Your are Representive ');
    }
    else {
      alert("Your password is wrong")
    }
  };


  // toogle show off password for sign Up
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // toogle show off password for sign In
  const handleClickShowPasswordIn = () => {
    setShowPasswordSignIn(!showPasswordSignIn);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Password check linear progress bar 
  const getPasswordStrength = () => {
    // Implement your password strength logic here
    // For simplicity, let's use a basic example
    const length = password.length;

    if (length === 0) {
      return 'Enter a password';
    } else if (length < 6) {
      return 'Weak';
    } else if (length < 10) {
      return 'Fair';
    } else if (length < 12) {
      return 'Good';
    } else {
      return 'Strong';
    }
  };

  // Password check linear progress bar Color
  const getPasswordStrengthColor = () => {
    // Implement your own color logic based on the strength
    switch (getPasswordStrength()) {
      case 'Weak':
        return 'red';
      case 'Fair':
        return 'orange';
      case 'Good':
        return 'yellow';
      case 'Strong':
        return 'green';
      default:
        return 'transparent';
    }
  };

  const getProgressValue = () => {
    // Implement your own progress value logic based on the strength
    switch (getPasswordStrength()) {
      case 'Weak':
        return 25;
      case 'Fair':
        return 50;
      case 'Good':
        return 75;
      case 'Strong':
        return 100;
      default:
        return 0;
    }
  };



  return (
    <Box

      sx={{
        width: '100%',
        height: "100vh",
        backgroundImage: 'url("./bg.jpg")', // replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      }}
    >

      <CustomTabPanel value={value} index={0}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Set a transparent white background
              backdropFilter: 'blur(1px)', // Apply a blur effect
              borderRadius: 2, // Optional: add border-radius for rounded corners
              padding: 2, // Optional: add padding for content inside the box


            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'transparent', border : "2px solid #dbd7d7" }}>
              <LockOutlinedIcon  className='text-[#dbd7d7]'/>
            </Avatar> */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 1 }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Sign Up"  {...a11yProps(0)} sx={{ color: '#dbd7d7', fontSize: "14px" }} />
                <Tab label="Sign In" {...a11yProps(1)} sx={{ color: '#dbd7d7', fontSize: "14px" }} />
              </Tabs>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, color: "white" }}>
              <Grid container spacing={2} >
                <Grid item xs={12} sm={6} >
                  <TextField

                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoComplete='off'
                    autoFocus
                    InputLabelProps={{
                      style: { color: '#dbd7d7', fontSize: "14px" }, // Set label color to white
                    }}
                    InputProps={{
                      style: { color: '#dbd7d7', fontSize: "14px" }, // Set text color to white
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    InputLabelProps={{
                      style: { color: '#dbd7d7', fontSize: "14px" }, // Set label color to white
                    }}
                    InputProps={{
                      style: { color: '#dbd7d7', fontSize: "14px" }, // Set text color to white
                    }}

                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete='off'
                    InputLabelProps={{
                      style: { color: '#dbd7d7', fontSize: "14px" }, // Set label color to white
                    }}
                    InputProps={{
                      style: { color: '#dbd7d7', fontSize: "14px" }, // Set text color to white
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <div >
                    <FormControl fullWidth variant="outlined" >
                      <InputLabel htmlFor="outlined-adornment-password" style={{ color: '#dbd7d7', fontSize: "14px" }} >Password</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}


                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff style={{ color: 'white' }} /> : <Visibility style={{ color: 'white' }} />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                        style={{ color: '#dbd7d7', fontSize: "14px" }}

                      />
                    </FormControl>
                    <div style={{ marginTop: 8 }}>
                      <LinearProgress
                        variant="determinate"
                        value={getProgressValue()}
                        style={{ backgroundColor: getPasswordStrengthColor() }}
                      />

                    </div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel className='text-[#4b96ec]'
                    control={<Checkbox value="allowExtraEmails" style={{ color: '#dbd7d7' }} />}
                    label="Accept Terms and Condition"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 5 }} /> */}
        </Container>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Set a transparent white background
              backdropFilter: 'blur(1px)', // Apply a blur effect
              borderRadius: 2, // Optional: add border-radius for rounded corners
              padding: 2, // Optional: add padding for content inside the box
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Sign Up" {...a11yProps(0)} sx={{ color: '#dbd7d7', fontSize: "14px" }} />
                <Tab label="Sign In" {...a11yProps(1)} sx={{ color: '#dbd7d7', fontSize: "14px" }} />
              </Tabs>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmitSignIn} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete= "off"
                    InputLabelProps={{
                      style: { color: '#dbd7d7', fontSize: "14px" }, // Set label color to white
                    }}
                    InputProps={{
                      style: { color: '#dbd7d7', fontSize: "14px" }, // Set text color to white
                    }}
                  />
                </Grid>
                <Grid item xs={12}>

                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" style={{ color: '#dbd7d7', fontSize: "14px" }}>Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-passwordSignIn"
                      type={showPasswordSignIn ? 'text' : 'password'}
                      value={passwordSignIn}
                      onChange={handlePasswordChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswordIn}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPasswordSignIn ? <VisibilityOff style={{ color: '#dbd7d7' }} /> : <Visibility style={{ color: '#dbd7d7' }} />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                      style={{ color: '#dbd7d7', fontSize: "14px" }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel className='text-[#4b96ec]'
                    control={<Checkbox value="allowExtraEmails" style={{ color: '#dbd7d7' }} />}
                    label="Remmember Me"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 5 }} /> */}
        </Container>
      </CustomTabPanel>
    </Box>
  );
}