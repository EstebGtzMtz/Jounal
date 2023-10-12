/* eslint-disable react/prop-types */
import { Grid, Toolbar } from '@mui/material';
import { Navbar, Sidebar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Grid sx={{display:'flex'}} className='animate__animated animate__fadeIn animate__faster'>

      <Navbar drawerWidth={ drawerWidth }/>
      <Sidebar drawerWidth={drawerWidth}/>

      <Grid item
        component='main'
        sx={{ flexGrow:1, p:3 }}
      >
        <Toolbar />
        {children}
      </Grid>
    </Grid>
  )
}
