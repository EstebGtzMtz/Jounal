import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { loadNotes } from '../../helpers';
import { addNewEmptyNote, isSavingNewNote, setActiveNote, setNotes } from './journalSlice';

export const startNewEmptyNote = () => {
  return async (dispatch, getState) => {

    // Dispatch isSavingNewNote to true and disable button to create newNotes
    dispatch(isSavingNewNote(true))

    const {uid} = getState().auth;

    const newNote = {
      title: `newNote ${new Date().getTime()}`,
      body: `new note body ${new Date().getTime()}`,
      date: new Date().getTime()
    }

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    // Logic to create newNote and set current note
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));

    // Dispacth isSaving state to false
    dispatch(isSavingNewNote(false));

  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const notesByUser = await loadNotes(uid);
    dispatch(setNotes(notesByUser))
  }
}