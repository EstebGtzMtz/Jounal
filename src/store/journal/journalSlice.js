import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: false,
  savedMessage: '',
  notes: [],
  activeNote: null
};

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    isSavingNewNote: (state, {payload}) => {
      state.isSaving = payload;
    },
    addNewEmptyNote: (state, {payload}) => {
      state.notes = [...state.notes, payload]
      state.isSaving = false
    },
    setActiveNote: (state, {payload}) => {
      state.activeNote = payload;
      state.savedMessage = null;
    },
    setNotes: (state, {payload})=> {
      state.notes = payload
    },
    setSaving: state => {
      state.isSaving = true;
      state.savedMessage = null
    },
    updateNoteInNoteList: (state, {payload})=> {
      state.isSaving = false;
      state.notes = state.notes.map(note => {
        if(note.id === payload.id){
          return payload;
        }
        return note;
      });
      state.savedMessage = `${payload.title}, succesfully updated`;
    },
    setPhotosToActiveNote: (state, {payload})=>{
      state.activeNote.imageUrls = [...state.activeNote.imageUrls,...payload];
      state.isSaving = false;
    }
    // deleteNoteById: (state, {payload})=>{}
  },
})

export const { isSavingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, setPhotosToActiveNote, updateNoteInNoteList, deleteNoteById } = journalSlice.actions;