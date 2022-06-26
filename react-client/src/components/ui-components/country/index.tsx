import react from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from "../image";

interface IProduct {
    name: string,
    flag: string
}


export function Country(props: IProduct) {
    return <div>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.name}
                </Typography>
                <Image image={props.flag} />
            </CardContent>
            <CardActions>
                <Button size="small">Visit</Button>
            </CardActions>
        </Card>
    </div>
}






