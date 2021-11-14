import { Badge, Box, IconButton, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close, ShoppingCart } from '@material-ui/icons';
import CropFreeIcon from '@material-ui/icons/CropFree';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { logout } from 'features/Auth/userSlice';
import { cartItemsCountSelector } from 'features/Cart/selectors';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';


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
    cartBox: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    cartTitle: {
        marginLeft: theme.spacing(1),
        fontSize: '0.75rem',
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
    const history = useHistory()
    const loggedInUser = useSelector(state => state.user.current)
    const cartItemsCount = useSelector(cartItemsCountSelector)

    const isLoggedIn = !!loggedInUser.id
    const [anchorEl, setAnchorEl] = useState(null)
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

    const handleCartClick = () => {
        history.push('/cart')
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <CropFreeIcon className={classes.menuButton} />
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.link}>TyKy</Link>
                    </Typography>

                    <NavLink
                        to='/products'
                        className={classes.link}
                        activeClassName='active-menu'
                        exact
                    >
                        <Button color="inherit">Products</Button>
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
                    <Button size="large" aria-label="show items count" color="inherit" className={classes.cartBox} onClick={handleCartClick}>
                        <Badge badgeContent={cartItemsCount} color="error">
                            <ShoppingCart />
                        </Badge>
                        <Typography variant="body2" component="span" className={classes.cartTitle}>Giỏ Hàng</Typography>
                    </Button>
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
                    <MenuItem onClick={handleCloseMenu}>My cart</MenuItem>
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
