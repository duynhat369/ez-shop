import { Box, IconButton, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close } from '@material-ui/icons';
import CropFreeIcon from '@material-ui/icons/CropFree';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { logout } from 'features/Auth/userSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500],
        zIndex: 1,
    },
    box: {
        textAlign: 'center',
        marginBottom: theme.spacing(2),
    },
}));

const MODE = {
    REGISTER: 'register',
    LOGIN: 'login',
}

export default function Header() {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null)
    const loggedInUser = useSelector(state => state.user.current)
    const isLoggedIn = !!loggedInUser.id

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);

    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMenuClick = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    const handleLogoutClick = () => {
        const action = logout()
        dispatch(action);
        setAnchorEl(null)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <CropFreeIcon className={classes.menuButton} />
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.link}>ShopE</Link>
                    </Typography>

                    <NavLink
                        to='/list'
                        className={classes.link}
                        activeClassName='active-menu'
                        exact
                    >
                        <Button color="inherit">List Page</Button>
                    </NavLink>
                    <NavLink
                        to='/list/:id'
                        className={classes.link}
                        activeClassName='active-menu'
                    >
                        <Button color="inherit">Detail Page</Button>
                    </NavLink>
                    {!isLoggedIn && (
                        <Button color="inherit" onClick={handleClickOpen} >
                            Login
                        </Button>
                    )}
                    {isLoggedIn && (
                        <IconButton color="inherit" onClick={handleMenuClick}>
                            <AccountCircle />
                        </IconButton>
                    )}
                </Toolbar>
                <Menu
                    keepMounted
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    getContentAnchorEl={null}
                >
                    <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                    <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                    <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
                </Menu>
            </AppBar>

            <Dialog
                disableEscapeKeyDown
                disableBackdropClick
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <IconButton className={classes.closeButton} onClick={handleClose} >
                    <Close />
                </IconButton>
                <DialogContent>
                    {mode === MODE.REGISTER &&
                        <>
                            <Register closeDialog={handleClose} />
                            <Box className={classes.box}>
                                <Button color='primary' onClick={() => setMode(MODE.LOGIN)}>
                                    Already have an account. Login here
                                </Button>
                            </Box>
                        </>
                    }
                    {mode === MODE.LOGIN &&
                        <>

                            <Login closeDialog={handleClose} />
                            <Box className={classes.box}>
                                <Button color='primary' onClick={() => setMode(MODE.REGISTER)}>
                                    Don't have an account. Register here
                                </Button>
                            </Box>
                        </>
                    }
                </DialogContent>
            </Dialog>
        </div>
    );
}
