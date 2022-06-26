import { useEffect, useState } from "react"
import { Country } from "../../ui-components/country"
import { HeaderApp } from "../../ui-components/header"
import axios from "axios"
import TextField from '@mui/material/TextField';

// type CountryType = typeof countries[0]

export const CountriesPage = () => {

    const [countries, setCountries] = useState<Array<any>>([])
    const [filter, setFilter] = useState<string>("")

    useEffect(() => {
        async function getCountries() {
            try {
                const baseUrl = `https://restcountries.com/v3.1`
                const url = filter ? `${baseUrl}/name/${filter}` : `${baseUrl}/all`
                const result = await axios.get(url)
                setCountries(result.data)
            } catch (ex) {
                alert("Something went wrong")
            }
        }
        getCountries()
    }, [filter])

    return <div style={{ width: "500px", margin: "auto auto" }}>
        <HeaderApp text="Countries Page" />
        <div>
            <TextField onChange={(e: any) => {
                setFilter(e.target.value)
            }} value={filter} id="outlined-basic" label="Filter" variant="outlined" />

            {countries.map((cItem: any) => {
                return <Country key={cItem.name.common} name={cItem.name.common} flag={cItem.flags.png} />
            })}
        </div>
    </div>
}
