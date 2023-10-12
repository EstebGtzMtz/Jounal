import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: true,
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
    addNewEmptyNote: (state, {payload}) => {},
    setActiveNote: (state, {payload}) => {},
    setNotes: (state, {payload})=> {},
    setSaving: state => {},
    updateNote: (state, {payload})=> {},
    deleteNoteById: (state, {payload})=>{}
  },
})

export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions;