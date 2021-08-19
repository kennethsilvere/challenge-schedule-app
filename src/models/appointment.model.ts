export type AppointmentModel = {
  id: string;
  requestedDate: string
  requestReason: string
  patientID: string
  doctorID: string
  status: string
  statusReason: string
  patientName: string
  patientImage: string
  assignedDoctorName: string
  assignedDoctorImage: string
}
