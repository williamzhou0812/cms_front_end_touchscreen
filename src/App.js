import React from 'react';
import ShowCase from './pages/ShowCase/ShowCase.page';



import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import TouchApp from '@material-ui/icons/TouchApp';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import Home from '@material-ui/icons/Home';
import Explore from '@material-ui/icons/Explore';



import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Info from '@material-ui/icons/Info';
import ContactSupport from '@material-ui/icons/ContactSupport';
import PhotoLibrary from '@material-ui/icons/PhotoLibrary';

import Settings from '@material-ui/icons/Settings';



const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen ] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  // function handleClick() {
  //   li_open(true);
  // }


  return (
    <div className={classes.root}>
    <CssBaseline />
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
           Touch Screen CMS Master
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      open={open}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />

      <List>
 
        <ListItem button onClick={handleDrawerOpen}>
        <ListItemIcon>
              <TouchApp/>
        </ListItemIcon>

      <ListItemText primary="Touch Screen" />
            {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
    
          <ListItem button className={classes.nested}>
            <ListItemIcon><RemoveRedEye/></ListItemIcon>
            <ListItemText primary='View Site' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Home/></ListItemIcon>
            <ListItemText primary='Show Case' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Explore/></ListItemIcon>
            <ListItemText primary='Explore' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Info/></ListItemIcon>
            <ListItemText primary='About' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon><ContactSupport/></ListItemIcon>
            <ListItemText primary='Contact' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon><PhotoLibrary/></ListItemIcon>
            <ListItemText primary='Library' />
          </ListItem>
        </List>
      </Collapse>
      </List>
      <Divider />
      <List>
        {/* {['Users', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <TouchApp /> : <RemoveRedEye />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
             <ListItem button className={classes.nested}>
            <ListItemIcon><Settings/></ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
      </List>
    </Drawer>
    <main className={classes.content}>
      <div className={classes.toolbar} />
        <ShowCase /> 
      {/* <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
        facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
        tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
        consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
        hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
        tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
        nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
        accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
      </Typography> */}
    </main>
  </div>
  );
}

export default App;
