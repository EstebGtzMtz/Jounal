/* eslint-disable no-undef */
import {startNewEmptyNote} from "../../../src/store/journal/journalThunks.js";
import {addNewEmptyNote, isSavingNewNote, setActiveNote} from "../../../src/store/journal/journalSlice.js";
import {collection, deleteDoc, getDocs} from "firebase/firestore/lite";
import {FirebaseDB} from "../../../src/firebase/config.js";

describe('Test on Journal Thunks file', () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    beforeEach(() => jest.clearAllMocks());

    test('should create a newEmptyNote and set it as activeNote', async ()=> {
        const uid = 'TEST_UID';
        getState.mockReturnValue({auth: {uid} });
        await startNewEmptyNote()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(isSavingNewNote(true));
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            body: '',
            title: '',
            id: expect.any(String),
            date: expect.any(Number)
        }));
        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            body: '',
            title: '',
            id: expect.any(String),
            date: expect.any(Number)
        }));

        //Delete from firebase
        const refCollection = collection(FirebaseDB,`${uid}/journal/notes`);
        const docs = await getDocs(refCollection);
        const deletePromises = [];
        docs.forEach(doc => deletePromises.push(deleteDoc(doc.ref)));
        await Promise.all(deletePromises);
    });
});