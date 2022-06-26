import react from "react"

interface IProps {
    image?: string
}

export default function Image(props: IProps) {
    const noImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
    return <img height={150} width={150} src={typeof props.image === 'string' && props.image ? props.image : noImage} />
}