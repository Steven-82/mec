import {Menu} from "@mui/icons-material"
import {AppBar,Toolbar,Button,Typography, TextField} from "@mui/material";

import './style.scss'

const displayOnlyOnMedium = { display: {
    xs: "none",
    md: "block"
}}
const searchFieldSize = {
    width: {
        xs :"320px",
        sm : "480px",
        md : "600px"
    },
}

function Navbar ({setDrawerOpen}) {
    return <AppBar position = "static" >
        <Toolbar className = "toolbar">
            <Button className = "menuButton" onClick={() => setDrawerOpen(true)}>
                <Menu  /><Typography variant = "body1" color = {"white"} sx = {displayOnlyOnMedium}>Menu</Typography></Button>
            <TextField placeholder="cerca..." size="small" className = "search" sx = {searchFieldSize}></TextField>
            <Typography xs={12} variant="h6" sx = {displayOnlyOnMedium}>Steven eCommerce</Typography>
        </Toolbar>
    </AppBar>
}

export default Navbar