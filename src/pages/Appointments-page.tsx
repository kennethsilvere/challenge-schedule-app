import { FunctionComponent, useContext } from "react"

import AppointmentsList from "../components/Appointments-list/Appointments-list"
import { useAppointmentsFilter } from "../hooks/use-appointments-filter"
import { AppointmentContext } from "../store/appointments-context"

import "./Appointments-page.css"

interface Props {}

const AppointmentPage: FunctionComponent<Props> = (props: Props) => {
  const appointmentCtx = useContext(AppointmentContext)
  let loading = true

  const { processData } = useAppointmentsFilter()

  const {
    newAppointments,
    confirmedAppointments,
    cancelledAppointments,
    completedAppointments,
  } = processData(appointmentCtx.allAppointments)

  loading = false

  return (
    <div>
      <h1>Appoinments</h1>
      {!loading && (
        <div>
          <AppointmentsList category='New' data={newAppointments} />
          <AppointmentsList category='Confirmed' data={confirmedAppointments} />
          <AppointmentsList category='Completed' data={completedAppointments} />
          <AppointmentsList category='Cancelled' data={cancelledAppointments} />
        </div>
      )}
    </div>
  )
}

export default AppointmentPage
