import React from 'react';
import {Navbar, Icon, NavItem} from "react-materialize";
import {NavLink} from "react-router-dom";

const Header = () => (
    <Navbar
        alignLinks="left"
        menuIcon={<Icon>menu</Icon>}
        className={"pink darken-2"}
    >
        <NavItem htref="/">Home</NavItem>
        <NavLink to={"post"}>Posts</NavLink>
    </Navbar>
);
export default Header;