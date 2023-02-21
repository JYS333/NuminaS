import React from "react";
import { NavLink } from "react-router-dom";

const Manage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', background: '#0FA' }}>
            Dashboard Page
            <NavLink to="/detail">Jump to Detail Page</NavLink>
            <NavLink to="/dashBoard/welcome">Jump to welcome</NavLink>
            <NavLink to="/dashBoard/user">Jump to User</NavLink>
        </div>
    )
}

export default Manage;