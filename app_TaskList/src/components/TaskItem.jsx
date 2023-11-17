import { useState } from 'react';
import { ListItem, ListItemText, ListItemButton, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function TaskItem  ({ task, handleComplete, handleDelete, handleEditName }) {
  
  const [isCompleted, setCompleted] = useState(task.completed);
 

  const toggleCompleted = () => {
    setCompleted(!isCompleted); 
    handleComplete(task.id);
  };

  const handleEditClick = () => {
    const newName = prompt('Ingrese el nuevo nombre de la tarea:', task.name);
    if (newName !== null && newName !== '') {
      handleEditName(task.id, newName);
    }
  };
 //

 //
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText
                    primary={task.name}
                    style={{
                              width: '100%',
                              display: 'flex',
                              justifyContent: 'center',
                              background: isCompleted ? '#41e280' : 'none',
                              overflow: 'hidden',  // Evita que el contenido desborde el contenedor
                              whiteSpace: 'nowrap',  // Evita el salto de línea dentro del texto
                           }}
       />
          {/* Boton Completado */}
          <Checkbox
          color="success"
          checked={isCompleted}
          onChange={toggleCompleted}
        />
        {/* Boton Editar */}
        <IconButton edge="end" aria-label="edit" onClick={handleEditClick}>
          <EditIcon />
        </IconButton>
        {/* Boton Eliminar */}
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemButton>
    </ListItem>
  );
}


