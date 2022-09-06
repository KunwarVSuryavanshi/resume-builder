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
            // fontWeight: '600',
            input: {
              padding: '3px'
            }
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: { // ===> '& .MuiChip-root'
          // '& .MuiChip-filled': {
            display: 'flex !important',
            alignItems: 'center !important',
            justifyContent: 'center !important',
            padding: '0 5px !important',
            fontFamily: 'Ubuntu',
            fontSize: '1rem'
          // }
        }
      }
    }
  }
})

// export default theme