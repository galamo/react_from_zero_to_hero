import react, { useCallback, useMemo, useState } from "react"
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';

import moment from "moment"


export default function DateApp(props: { currentDate?: Date }) {
    console.log("render")
    const [utc, setIsUtc] = useState<boolean>(true)
    const defaultformat = "DD/MM/YYY hh:mm:ss"
    const [format, setFormat] = useState<string>(defaultformat)
    const [count, setCounter] = useState<number>(0)

    const date = useMemo(() => { return expensiveCalculation(props.currentDate || new Date(), format) }
        , [format, utc])

    function expensiveCalculation(d: Date, format: string) {
        console.log("expensive calc")
        return utc ? moment(d).utc().format(format) :
            moment(d).local().format(format)
    }

    const changeFormatHandler = useCallback((e: any) => {
        setFormat(e.target.value)
    }, [format])

    const changeUtcHandler = useCallback(() => {
        console.log("changeUtcHandler")
        setIsUtc(!utc)
    }, [utc])


    return <div>
        <TextField onChange={changeFormatHandler} value={format} id="outlined-basic" label="format" variant="outlined" />
        <Switch checked={utc} onChange={changeUtcHandler} />
        <h2 onClick={() => { setCounter(count + 1) }}> {date.toString()} {count} </h2>
    </div>
}