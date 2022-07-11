import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiFilledInput-root': {
            backgroundColor: '#0000 !important',
            padding: '3px 6px',
            ':before': {
              borderBottom: '0px'
            },
            input: {
              padding: '3px'
            }
         }
        }
      }
    }
  }
})

// export default theme