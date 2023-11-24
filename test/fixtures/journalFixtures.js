export const journalInitialState = {
    isSaving: false,
    savedMessage: '',
    notes: [],
    activeNote: null
};

export const emptyNoteState = {
    title: '',
    body: '',
    date: new Date().getTime()
};

export const noteFilledState = {
    uid: 123123212131,
    title: 'title note test',
    body: 'body note test',
    date: new Date().getTime()
}

export const savedNotesState = {
    isSaving: false,
    savedMessage: '',
    notes: [{...noteFilledState}],
    activeNote: null
};


