import react from "react"

interface IProps {
    text: string
    color?: string
}
const defaultColor = "lightgreen"
export function HeaderApp(props: IProps) {
    const { text, color } = props
    // props.text
    return <h1 style={{ color: color || defaultColor }}> {text} </h1>
}