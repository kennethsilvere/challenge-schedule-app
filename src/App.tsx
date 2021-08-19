import "./App.css"

import NavBar from "./components/NavBar"
import Sidebar from "./components/Sidebar"
import AppointmentPage from "./pages/Appointments-page"
import AppointmentContextProvider from "./store/appointments-context"

function App() {
  return (
    <AppointmentContextProvider>
      <header>
        <NavBar />
      </header>
      <div className='container'>
        <Sidebar />
        <main>
          <AppointmentPage />
        </main>
      </div>
    </AppointmentContextProvider>
  )
}

export default App
