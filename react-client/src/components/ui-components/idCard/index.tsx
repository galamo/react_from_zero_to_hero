import react from "react"
import DateApp from "../../app-components/dateApp"
import Image from "../image"


export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

interface IdCardProps {
    lastName: string
    firstName: string
    gender: Gender
    height: number
    birth: Date
    picture: string
}

export default function IdCard(props: IdCardProps) {
    return <div style={{ width: "500px", margin: "auto auto", border: "1px solid black" }}>
        <h2> {props.firstName} {props.lastName}</h2>
        <h2> {props.gender} </h2>
        <DateApp currentDate={props.birth} />
        <Image image={props.picture} />
    </div>
}