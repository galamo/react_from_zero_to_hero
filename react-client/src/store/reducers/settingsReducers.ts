import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { format } from "path"

interface SettingsState {
    isUtc: Boolean
    format: string,
    counter: number
}

const initialState: SettingsState = {
    isUtc: false,
    format: "",
    counter: 0
}

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setUtc: (state: SettingsState) => {
            state.isUtc = !state.isUtc
        },
        setCounter: (state: SettingsState) => {
            state.counter = state.counter + 1
        }
    }

})

export const { setUtc, setCounter } = settingsSlice.actions
export default settingsSlice.reducer

