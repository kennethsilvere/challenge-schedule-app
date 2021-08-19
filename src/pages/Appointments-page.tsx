import { FunctionComponent } from "react"

import AppointmentContextProvider from "../store/appointments-context"

import "./Appointments-page.css"

interface Props {}

const AppointmentPage: FunctionComponent<Props> = (props: Props) => {
  return (
    <AppointmentContextProvider>
      <h1>Appoinments</h1>
    </AppointmentContextProvider>
  )
}

export default AppointmentPage
