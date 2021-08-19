import { FunctionComponent, useContext } from "react"

import { AppointmentModel } from "../../models/appointment.model"
import { AppointmentContext } from "../../store/appointments-context"

import "./Appointment.css"

interface Props {
  data: AppointmentModel
}

const Appointment: FunctionComponent<Props> = (props: Props) => {
  const appointmentCtx = useContext(AppointmentContext)

  const cancelApppointment = () => {
    const updatedAppointments = appointmentCtx.allAppointments.map((a) => {
      if (props.data.id === a.id) {
        a.status = "cancelled"
        a.cancellationReason = "Cancelled"
      }
      return a
    })
    appointmentCtx.setAllAppointments(updatedAppointments)
  }
  return (
    <div className='appointment-container'>
      <div className='appointment-detail'>
        <p>
          Name: <span className='data-value'>{props.data.patientName}</span>
        </p>
        <img
          src={props.data.patientImage}
          alt={props.data.patientName}
          height='100px'
        />
      </div>
      <div className='appointment-detail'>
        <p>
          Date: <span className='data-value'>{props.data.requestedDate}</span>
        </p>
        <p>
          Reason: <p className='data-value'>{props.data.requestReason}</p>
        </p>
        {(props.data.status === "new" || props.data.status === "confirmed") && (
          <p>
            <span>Actions:</span>
            <button onClick={cancelApppointment} className='cancel-btn'>
              Cancel
            </button>
          </p>
        )}
        {props.data.cancellationReason && (
          <p>
            Reason for Cancellation:{" "}
            <span className='data-value'>{props.data.cancellationReason}</span>
          </p>
        )}
      </div>
      <div className='appointment-detail'>
        <p>
          Doctor:{" "}
          <span className='data-value'>{props.data.assignedDoctorName}</span>
        </p>
        {props.data.assignedDoctorImage && (
          <img
            src={props.data.assignedDoctorImage}
            alt={props.data.assignedDoctorName}
            height='100px'
          />
        )}
      </div>
    </div>
  )
}

export default Appointment
