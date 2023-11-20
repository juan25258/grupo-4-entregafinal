import { AppBar, Button, Toolbar, Typography } from "@mui/material";

import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Icono de sol
import NightsStayIcon from "@mui/icons-material/NightsStay"; // Icono de luna
import { lightTheme } from "./Utils/Tema";

export default function NavBar({ toggleTheme, currentTheme }) {
  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Administrador de Tareas
        </Typography>
        <Button color="inherit" onClick={toggleTheme} anchor="rithg">
          {currentTheme === lightTheme ? <NightsStayIcon /> : <WbSunnyIcon />}{" "}
          {/* Boton para cambio de icono - Revisar si funciona ok. */}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
