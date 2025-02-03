import { createTheme } from "@mui/material";

export const DarkTheme=createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#e91e63"
        },
        secondary:{
            main:"#5A20CB"
        },
        black:{
            main:"#24B2E"
        },
        background:{
            main:"#fff",
            default:"#fff",
            paper:"#fff"
        },
        textcolor:{
            main:"#ffff"
        }
    }
})
