import { AppointmentModel } from "../models/appointment.model"

export const useAppointmentsFilter = () => {
  let newAppointments: AppointmentModel[] = [],
    confirmedAppointments: AppointmentModel[] = [],
    cancelledAppointments: AppointmentModel[] = [],
    completedAppointments: AppointmentModel[] = []

  const processData = (allAppointments: AppointmentModel[]) => {
    newAppointments = allAppointments.filter(
      (a: AppointmentModel) => a.status === "new"
    )
    confirmedAppointments = allAppointments.filter(
      (a: AppointmentModel) => a.status === "confirmed"
    )
    cancelledAppointments = allAppointments.filter(
      (a: AppointmentModel) => a.status === "cancelled"
    )
    completedAppointments = allAppointments.filter(
      (a: AppointmentModel) => a.status === "completed"
    )
    return {
      newAppointments,
      confirmedAppointments,
      cancelledAppointments,
      completedAppointments,
    }
  }

  return { processData }
}
