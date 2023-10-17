/* eslint-disable react/prop-types */
import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react";
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({title, body, id, date, imageUrls = []}) => {

  const dispatch = useDispatch();

  const shortName = useMemo(()=> title.length > 17 ? `${title.substring(0,17)}...` : title, [title])

  const onClickSetActiveNote = () => {
    dispatch(setActiveNote({id, title, body, date, imageUrls}));
  };

  return (
    <ListItem disablePadding onClick={onClickSetActiveNote}>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={shortName} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
