import react, { ReactElement } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



interface Iprops {
    children: ReactElement
    isLoading: boolean
}

export default function WithLoading(props: Iprops) {
    const { isLoading, children } = props;
    return isLoading ? <CircularIndeterminate /> : children
}

function CircularIndeterminate() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    );
}