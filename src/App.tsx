import "./App.css"

import NavBar from "./components/NavBar"
import Sidebar from "./components/Sidebar"
import AppointmentPage from "./pages/Appointments-page"

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className='container'>
        <Sidebar />
        <main>
          <AppointmentPage />
        </main>
      </div>
    </>
  )
}

export default App
