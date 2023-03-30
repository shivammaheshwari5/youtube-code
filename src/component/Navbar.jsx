import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/system'
import {logo} from '../utils/constants'
import SearchBar from './SearchBar'
const Navbar = () => (
    <Stack direction="row" alignItems="center" p={2}
    sx={{ justifyContent:"space-between", position:"sticky", top:0, background:"#000" }}>
    <Link to="/" style={{display: "flex", alignItems:"center"}}>
    <img src={logo} alt="logo" height={45}/>
    </Link>
    <SearchBar/>
    </Stack>
)



export default Navbar;