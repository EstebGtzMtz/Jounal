/* eslint-disable no-undef */
import {isSavingNewNote, journalSlice} from "../../../src/store/journal/journalSlice.js";
import {isSavingNewNoteState, journalInitialState} from "../../fixtures/journalFixtures.js";

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
});