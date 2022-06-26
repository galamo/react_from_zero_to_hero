import react from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from "../image";

interface IProduct {
    title: string,
    thumbnail: string,
    price: number,
    brand: string,
    id: number,
    description: string

}


export function Product(props: IProduct) {
    return <div>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.brand}
                </Typography>
                <Typography variant="body2">
                    {props.price}$
                    <br />
                    {props.description}
                </Typography>
                <Image image={props.thumbnail} />
            </CardContent>
            <CardActions>
                <Button size="small">Buy</Button>
            </CardActions>
        </Card>
    </div>
}






