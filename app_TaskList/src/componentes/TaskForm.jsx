import { useState } from 'react';
import { Paper, TextField, Button } from '@mui/material';

export default function TaskForm ({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      addTask(taskName);
      setTaskName(''); //Seteo para que se borre el elemento cargado
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
        <Button type="submit" variant="contained" color="primary"  style={{marginTop: '8px' }}>
          Agregar Tarea
        </Button>
      </form>
    </Paper>
  );
}


