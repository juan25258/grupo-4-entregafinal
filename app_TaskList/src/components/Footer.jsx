import { AppBar, Toolbar, Typography } from "@mui/material";


export default function Footer() {
  const año = new Date().getFullYear()
    return (
    <AppBar position="static" color="primary" sx={{marginTop:'15px'}}> 
      <Toolbar>
        <Typography variant="body2" color="inherit">
           Administrador de Tareas - TP UTN - REACT  © {año} .
        </Typography>
      </Toolbar>
    </AppBar>
  );
}