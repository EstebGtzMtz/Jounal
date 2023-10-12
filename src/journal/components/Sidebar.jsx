/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { TurnedInNot } from "@mui/icons-material"
import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"

export const Sidebar = ({drawerWidth}) => {

  const {displayName} = useSelector(state => state.auth);

  return (
    <Grid
      component='nav'
      sx={{
        width: {
          sm: drawerWidth
        },
        flexShrink: {
          sm:0
        }
      }}
    >
      <Drawer
        variant='permanent' // temporary
        open
        sx={{
          display:{ xs:'block' },
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div' >
            {displayName}
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {
            ['January', 'February', 'March', 'April', 'May', 'June', 'July'].map(text => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text}/>
                    <ListItemText secondary='Elit amet labore duis amet duis consectetur.'/>
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>

      </Drawer>
    </Grid>
  )
}
