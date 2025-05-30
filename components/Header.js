import { useState, useEffect } from 'react';

import { NavLink } from '.';
import { userService } from 'services';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Link from 'next/link';


  



export { Header};

function Header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));

      const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));

    // only show nav when logged in
    if (!user) {
        
        
        return (
            <>
            
      
              <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar navbar-dark bg-primary sticky-top navbar-prop" >
              <Container>
            
               
                
        <Navbar.Brand href="/" >  <h1 > <MenuBookIcon style={{fontSize: '48px'}}/>Learnings Made Easy</h1></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <NavLink href="/" exact className="nav-item nav-link"><Button color="inherit">Home</Button></NavLink>
                <NavLink href="/about" className="nav-item nav-link"><Button color="inherit">About Us</Button></NavLink>
                <NavLink href="/articles" exact className="nav-item nav-link"><Button color="inherit">Article</Button></NavLink>
                <NavLink href="/contact" exact className="nav-item nav-link"><Button color="inherit">Contact Us</Button></NavLink>
                <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  
         
        </>
        );

    }else{
    
        
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
            <div className="navbar-nav">
                <NavLink href="/" exact className="nav-item nav-link">Dashboard</NavLink>
                <NavLink href="/users" className="nav-item nav-link">Users</NavLink>
                <NavLink href="/blogs" className="nav-item nav-link">Blogs</NavLink>
                <button onClick={userService.logout} className="btn btn-link nav-item nav-link">Logout</button>
            </div>
        </nav>
    );
}

}