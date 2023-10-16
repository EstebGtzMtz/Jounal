import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  activeNote: null,
  // active:{
  //   id: '123',
  //   title: '',
  //   body: '',
  //   date: 31231,
  //   imageUrls: []
  // }
}

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
    },
    setNotes: (state, {payload})=> {},
    setSaving: state => {},
    updateNote: (state, {payload})=> {},
    deleteNoteById: (state, {payload})=>{}
  },
})

export const { isSavingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions;