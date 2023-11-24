/* eslint-disable no-undef */
import {
    addNewEmptyNote,
    isSavingNewNote,
    journalSlice,
    setActiveNote
} from "../../../src/store/journal/journalSlice.js";

import {
    emptyNoteState,
    journalInitialState,
    noteFilledState,
    savedNotesState,
} from "../../fixtures/journalFixtures.js";

describe('Test on journalSlice', () => {
    test('should be call "journal" and return the initial state',() => {
        expect(journalSlice.name).toBe('journal');
        const state = journalSlice.reducer(journalInitialState, {});
        expect(state).toEqual(journalInitialState);
    });

    test('should change the state when a note is saving', () => {
        const state = journalSlice.reducer(journalInitialState, isSavingNewNote(true));
        expect(state).toEqual({
            isSaving: true,
            savedMessage: '',
            notes: [],
            activeNote: null
        });
    });

    test('should add new empty note to the state',() => {
        const state = journalSlice.reducer(savedNotesState, addNewEmptyNote(emptyNoteState));
        expect(state).toEqual({
            isSaving: false,
            savedMessage: '',
            notes: [...savedNotesState.notes, {...emptyNoteState}],
            activeNote: null
        });
    });

    test('should set active note to show', () => {
        const state = journalSlice.reducer(savedNotesState, setActiveNote(noteFilledState));
        expect(state).toEqual({
            isSaving: false,
            savedMessage: null,
            notes: [{...noteFilledState}],
            activeNote: {...noteFilledState}

        })

    });
});