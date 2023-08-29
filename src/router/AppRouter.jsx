import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/Routes/AuthRoutes"
import { JournalRoutes } from "../journal/Routes/JournalRoutes"

const AppRouter = () => {
  return (
    <Routes>
			{/* Login */}
			<Route path='/auth/*' element={<AuthRoutes />} />

			{/* Journal App  */}
			<Route path='/*' element={<JournalRoutes />} />
		</Routes>
  )
}

export default AppRouter