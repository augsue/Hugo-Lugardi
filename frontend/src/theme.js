import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#4A4A4A'
        },
        secondary: {
            main: '#2B2B2B'
        },
        background: {
            default: '#1C1C1C',
            paper: '#242424'
        },
        text: {
            primary: '#F5F5F0',
            secondary: '#B0B0AC',
        },
    },
})