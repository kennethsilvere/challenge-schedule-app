import { FunctionComponent } from "react"
import { AppointmentModel } from "../../models/appointment.model"

import "./Appointment.css"

interface Props {
 data: AppointmentModel
}

const Appointment: FunctionComponent<Props> = (props: Props) => {
  return (
    <div className='appointment-container'>
      <div className='appointment-detail'>
        <h6>Name: {props.data.patientName}</h6>
        <img src={props.data.patientImage} alt={props.data.patientName} height='100px' />
      </div>
      <div className='appointment-detail'>
        <h6>Date: {props.data.requestedDate}</h6>
        <h6>Reason: {props.data.requestReason}</h6>
        <h6>
          Actions:
          <button>Cancel</button>
        </h6>
      </div>
      <div className='appointment-detail'>
        <h6>Doctor: {props.data.assignedDoctorName}</h6>
        <img src={props.data.assignedDoctorImage} alt={props.data.assignedDoctorName} height='100px' />

      </div>
    </div>
  )
}

export default Appointment
