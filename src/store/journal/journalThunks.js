import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { fileUpload, loadNotes } from '../../helpers';
import { addNewEmptyNote, deleteNoteById, isSavingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNoteInNoteList } from './journalSlice';

export const startNewEmptyNote = () => {
  return async (dispatch, getState) => {

    // Dispatch isSavingNewNote to true and disable button to create newNotes
    dispatch(isSavingNewNote(true))

    const {uid} = getState().auth;

    const newNote = {
      title: '',
      body: '',
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

export const startSaveNote = () => {
  return async (dispatch, getState) => {

    dispatch(setSaving());

    const {uid} = getState().auth;
    const {activeNote} = getState().journal;

    const noteToFirestore = {...activeNote};
    delete noteToFirestore.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);
    await setDoc(docRef, noteToFirestore, {merge: true});
    dispatch(updateNoteInNoteList(activeNote));
  }
}

export const startUploadFileToCloudinary = (files=[]) => {
  return async dispatch => {
    dispatch(setSaving());
    const fileUploadPromises = [];

    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }

    const photosURl = await(Promise.all(fileUploadPromises));
    dispatch(setPhotosToActiveNote(photosURl))
  }
}

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const {uid} = getState().auth;
    const {activeNote} = getState().journal;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);
    await deleteDoc(docRef);
    dispatch(deleteNoteById(activeNote.id))
  }
}