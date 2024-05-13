
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { mainListItems, secondaryListItems } from './ListItem';
// import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Intro from './Intro';
import CardinalAreaChart from './CardinalAreaChart';
import PieChartDashboard from './PieChartDashboard';
import BarChartDashboard from './BarChart';
import UpcomingAppointMent from './UpcomingAppointMent';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://ethicalden.com/">
//         Ethical Den
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  boxShadow: 'none',

}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open, darkMode }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
      borderRight: darkMode ? '1px solid #2D3748' : 'none'
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const [dark, setDark] = React.useState(true);

  const toggoleDark = () => {
    setDark(!dark)
  }

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme} >
      <Box sx={{ display: 'flex', backgroundColor: dark ? '#191E24' : '#FAFAFA', height: '100vh' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px',
              backgroundColor: dark ? '#1D232A' : '#FAFAFA',
              color: dark ? "#95C11F" : "#95C11F",

            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />

            </IconButton>

            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            {
              dark ? (<IconButton onClick={toggoleDark} color="inherit">
                <DarkModeOutlinedIcon />
              </IconButton>) : (<IconButton onClick={toggoleDark} color="inherit">
                <LightModeOutlinedIcon />
              </IconButton>)
            }
            <IconButton color="inherit">
              <Badge badgeContent={4} sx={{ color: '#95C11F' }}>
                <NotificationsIcon />
              </Badge>
            </IconButton>

          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} sx={{ border: 'none' }} darkMode={dark}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              backgroundColor: dark ? '#1D232A' : '',

              px: [1],
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, marginLeft: "0px", }}
            >
              <img src="https://i.ibb.co/NLrL8S3/e-laj-Logo.png" alt="E-laj Logo" className='h-[35px] ml-2' />
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon className='text-[#95C11F]' />
            </IconButton>
          </Toolbar>
          {/* to do backgorund color  */}
          <List className={`${dark ? 'bg-[#1D232A] text-[#E2E8F0]' : 'text-[#202020] '
            } h-[100vh]`} component="nav"

          >
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{

            backgroundColor: dark ? '#191E24' : '#FAFAFA',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'

          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>

              {/* Recent Deposits */}
              <Grid item xs={12} md={12} lg={12}>
                <div

                >
                  <Intro darkMode={dark} />
                </div>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 130,
                    backgroundColor: dark ? '#1D232A' : '#fff',
                    color: "",
                    border: dark ? "1px solid #2D3748" : "none"
                  }}
                >
                  <Deposits darkMode={dark} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 130,
                    backgroundColor: dark ? '#1D232A' : '#fff',
                    color: "#E2E8F0",
                    border: dark ? "1px solid #2D3748" : "none"
                  }}
                >
                  <Deposits darkMode={dark} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 130,
                    backgroundColor: dark ? '#1D232A' : '#fff',
                    color: "#E2E8F0",
                    border: dark ? "1px solid #2D3748" : "none"
                  }}
                >
                  <Deposits darkMode={dark} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 130,
                    backgroundColor: dark ? '#1D232A' : '#fff',
                    color: "#E2E8F0",
                    border: dark ? "1px solid #2D3748" : "none"
                  }}
                >
                  <Deposits darkMode={dark} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={9} lg={8}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 500,
                    backgroundColor: dark ? '#1D232A' : '#fff',
                    color: "#E2E8F0",
                    border: dark ? "1px solid #2D3748" : "none"
                  }}
                >
                  <CardinalAreaChart darkMode={dark}></CardinalAreaChart>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 500,
                    backgroundColor: dark ? '#1D232A' : '#fff',
                    color: "#E2E8F0",
                    border: dark ? "1px solid #2D3748" : "none"
                  }}
                >
                  <PieChartDashboard darkMode={dark} ></PieChartDashboard>
                </Paper>
              </Grid>

              {/* Recent Orders */}
              <Grid item xs={12} md={8} lg={8}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: dark ? '#1D232A' : '#fff',
                    color: "#E2E8F0",
                    border: dark ? "1px solid #2D3748" : "none"
                  }}>
                  <Orders darkMode={dark} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 300,
                    backgroundColor: dark ? '#1D232A' : '#fff',
                    color: "#E2E8F0",
                    border: dark ? "1px solid #2D3748" : "none"
                  }}
                >
                  <BarChartDashboard darkMode={dark} />
                </Paper>
              </Grid>         
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                   
                    backgroundColor: dark ? '#1D232A' : '#fff',
                    color: "#E2E8F0",
                    border: dark ? "1px solid #2D3748" : "none"
                  }}
                >
                  <UpcomingAppointMent darkMode={dark} />
                </Paper>
              </Grid>
              {/* <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    backgroundColor: dark ? 'transparent' : '#fff',
                    color: "#E2E8F0",
                    border: dark ? "1px solid #2D3748" : "none"
                  }}
                >
                  <Chart />
                </Paper>
              </Grid> */}
              
              
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}