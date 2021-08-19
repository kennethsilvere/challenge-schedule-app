import { createContext, useState, useEffect } from "react"

import { AppointmentModel } from "../models/appointment.model"

export type AppointmentContextType = {
  allAppointments: AppointmentModel[]
  setAllAppointments: (data: AppointmentModel[]) => void
}

export const AppointmentContext = createContext<AppointmentContextType>({
  allAppointments: [],
  setAllAppointments: (data: AppointmentModel[]) => {},
})

const AppointmentContextProvider: React.FC = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [appointmentsData, setAppointmentsData] = useState<AppointmentModel[]>([])

  const setAllAppointmentsHandler = (data: AppointmentModel[]) =>
    setAppointmentsData(data)

  const context: AppointmentContextType = {
    allAppointments: appointmentsData,
    setAllAppointments: setAllAppointmentsHandler,
  }

  let allAppointmentsList: AppointmentModel[], patients: any[], doctors: any[]

  useEffect(() => {
    const getAppointments = fetch("/api-v1/appointments").then((response) =>
      response.json()
    )

    const getPatients = fetch("/api-v1/patients").then((response) =>
      response.json()
    )

    const getDoctors = fetch("/api-v1/doctors").then((response) =>
      response.json()
    )

    Promise.all([getAppointments, getPatients, getDoctors]).then((data) => {
      allAppointmentsList = data[0].appointments
      patients = data[1].patients
      doctors = data[2].doctors

      function getPatient(patientId: string) {
        return patients.find((p) => p.id === patientId)
      }

      function getDoctor(doctorId: string) {
        return doctors.find((d) => d.id === doctorId)
      }

      allAppointmentsList = allAppointmentsList.map((a: any) => {
        const patient = getPatient(a.patientID)
        let doctor
        if (a.doctorID) {
          doctor = getDoctor(a.doctorID)
        }
        return {
          ...a,
          requestedDate: new Date(a.requestedDate).toDateString(),
          patientName: patient["name"],
          patientImage: patient["photoURL"],
          assignedDoctorName: doctor ? doctor["name"] : 'Unassigned',
          assignedDoctorImage: doctor ? doctor["photoURL"] : undefined,
        }
      })

      setAllAppointmentsHandler(allAppointmentsList)
      setIsLoading(false)
    })
  }, [])

  return (
    <div>
      {!isLoading && (
        <AppointmentContext.Provider value={context}>
          {props.children}
        </AppointmentContext.Provider>
      )}
    </div>
  )
}

export default AppointmentContextProvider
