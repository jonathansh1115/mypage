import React, { useState, useEffect } from "react";
import './styles/sidebar.css'

// libraries
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText'
import { Link, useHistory } from 'react-router-dom'
import {Button} from 'reactstrap'

const Sidebar = (props) => {

    const { items } = props
    let history = useHistory()

    const change = (name) => {
        let lowered = name.toLowerCase()
        history.push(`/admin_control_panel/${lowered}`)
    }
    
    return (
        <div className="sidebar">

            <List disablePadding dense>
                {items.map(({ label, name, ...rest }) => (
                    <ListItem key={name} button {...rest} 
                    onClick={() => {
                        // localStorage.setItem('tab', name)
                        change(name)
                    }}>
                        <ListItemText>{label}</ListItemText>
                    </ListItem>
                ))}
            </List>

        </div>
    );
}

export default Sidebar;
