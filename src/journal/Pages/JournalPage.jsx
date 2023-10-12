import { JournalLayout } from "../Layout/JournalLayout";
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { NoteView } from "../view";
import { useDispatch } from "react-redux";
import { startNewEmptyNote } from "../../store/journal/journalThunks";

export const JournalPage = () => {

  const dispatch = useDispatch();

  const addNewNote = () => {
    dispatch(startNewEmptyNote());
  }

  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <NoteView />

      <IconButton
        onClick={addNewNote}
        size='large'
        sx={{
          color: 'white',
          backgroundColor:'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize: 30}} />
      </IconButton>
    </JournalLayout>
  )
}
