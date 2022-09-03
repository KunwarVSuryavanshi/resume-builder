import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiFilledInput-root': {
            backgroundColor: '#0000 !important',
            padding: '3px 6px',
            marginTop: '0px !important',
            ':before': {
              borderBottom: '0px'
            },
            fontFamily: 'Ubuntu',
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