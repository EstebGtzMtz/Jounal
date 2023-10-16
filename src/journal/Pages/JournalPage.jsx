import { JournalLayout } from "../Layout/JournalLayout";
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { NoteView, NothingSelectedView } from "../view";
import { useDispatch, useSelector } from "react-redux";
import { startNewEmptyNote } from "../../store/journal/journalThunks";

export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, activeNote } = useSelector(state => state.journal)

  const addNewNote = () => {
    dispatch(startNewEmptyNote());
  }

  return (
    <JournalLayout>
      {
        activeNote ?
          <NoteView title={activeNote.title}  body={activeNote.body} /> :
          <NothingSelectedView />
      }

      <IconButton
        disabled={isSaving}
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
