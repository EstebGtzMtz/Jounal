/* eslint-disable no-undef */
import { journalSlice } from "../../../src/store/journal/journalSlice.js";
import { journalInitialState } from "../../fixtures/journalFixtures.js";

describe('Test on journalSlice', () => {
    test('should be call "journal" and return the initial state',() => {
        expect(journalSlice.name).toBe('journal');
        const state = journalSlice.reducer(journalInitialState, {});
        expect(state).toEqual(journalInitialState);
    })
});