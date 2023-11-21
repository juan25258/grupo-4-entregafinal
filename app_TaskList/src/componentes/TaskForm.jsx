import { useState } from 'react';
import { Paper, TextField, Button, Alert } from '@mui/material';

export default function TaskForm ({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => { //Mensajes de Error o de Agregado correctamente.
    setTaskName(e.target.value);
    setShowError(false);
    setShowSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      addTask(taskName);
      setTaskName('');
      setShowSuccess(true); // True en Mensaje de tarea agregada correctamente.
    } else {
      setShowError(true); // True en Mensaje de campo vacio.
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Agregar Tarea"
          variant="filled"
          value={taskName}
          onChange={handleChange}
          margin="normal"
        />
        {showError && (
          <Alert severity="error" style={{ marginTop: '8px' }}>
            El campo no puede estar vacío
          </Alert>
        )}
        {showSuccess && (
          <Alert severity="success" style={{ marginTop: '8px' }}>
            Tarea agregada correctamente
          </Alert>
        )}
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '8px' }}>
          Agregar Tarea
        </Button>
      </form>
    </Paper>
  );
}
