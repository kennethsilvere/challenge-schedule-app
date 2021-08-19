import { FunctionComponent } from "react"

import { AppointmentModel } from "../../models/appointment.model"
import Appointment from "../Appointment/Appointment"

import "./Appointments-list.css"

interface Props {
 category: string,
 data: AppointmentModel[]
}

const AppointmentsList: FunctionComponent<Props> = (props: Props) => {
  console.log(props);
  return <div>
   <h2>{props.category}</h2>
   {props.data.map((a: AppointmentModel) => {
    return <Appointment data={a} key={a.id}/>
   })}
  </div>
}

export default AppointmentsList
