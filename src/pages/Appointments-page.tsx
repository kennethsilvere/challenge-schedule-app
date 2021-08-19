import { FunctionComponent, useContext } from "react"

import AppointmentsList from "../components/Appointments-list/Appointments-list"
import { AppointmentModel } from "../models/appointment.model"
import { AppointmentContext } from "../store/appointments-context"

import "./Appointments-page.css"

interface Props {}

const AppointmentPage: FunctionComponent<Props> = (props: Props) => {
  const appointmentCtx = useContext(AppointmentContext)
  let loading = true

  let newAppointments: AppointmentModel[] = [],
    confirmedAppointments: AppointmentModel[] = [],
    cancelledAppointments: AppointmentModel[] = [],
    completedAppointments: AppointmentModel[] = []

  const processData = () => {
    newAppointments = appointmentCtx.allAppointments.filter(
      (a) => a.status === "new"
    )
    confirmedAppointments = appointmentCtx.allAppointments.filter(
      (a) => a.status === "confirmed"
    )
    cancelledAppointments = appointmentCtx.allAppointments.filter(
      (a) => a.status === "cancelled"
    )
    completedAppointments = appointmentCtx.allAppointments.filter(
      (a) => a.status === "completed"
    )
    loading = false
  }

  processData()

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
