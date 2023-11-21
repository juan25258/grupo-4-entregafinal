import { createTheme } from "@mui/material";

//Tema del proyecto:

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#14a3d2',
      },
    },
  });
  
  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: '#42c6a9',
      },
    },
  });
  
  export { darkTheme, lightTheme };