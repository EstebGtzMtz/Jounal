import { JournalLayout } from "../Layout/JournalLayout"
import { NoteView } from "../view"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  )
}
