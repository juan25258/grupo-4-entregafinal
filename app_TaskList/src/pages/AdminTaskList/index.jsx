import React from "react";
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { useState, useEffect } from 'react';
import { darkTheme, lightTheme } from "../../componentes/Utils/Tema";
import NavBar from "../../componentes/NavBar";
import TaskForm from "../../componentes/TaskForm";
import TaskList from "../../componentes/TaskList";



export default function AdminTaskList() {
// Obtener las tareas almacenadas en localStorage al cargar la aplicación
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
// Array de las tareas
  const [tasks, setTasks] = useState(savedTasks);


// Registro por consola  y al localstorage las actualizaciones
  useEffect(() => {
    console.log('Tasks updated:', tasks);
    // Guardar las tareas en localStorage cada vez que cambian
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

// Realiza la actualizacion cuando completo la tarea
  const handleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
   

 // Realiza el cambio de nombre de la tarea

  const handleEditName = (taskId, newName) => {
  const updatedTasks = tasks.map((task) =>
    task.id === taskId ? { ...task, name: newName } : task
  );
  setTasks(updatedTasks);
}; 

// Realiza la eliminacion de la tarea
  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  
// Agrego la tarea, le genero un id.
  const addTask = (taskName) => {
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  //Boton de tema dark o light
  
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  return (
   
    <Container component="main" maxWidth="md">
       <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <NavBar toggleTheme={toggleTheme} currentTheme={currentTheme}/>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} handleComplete={handleComplete} handleDelete={handleDelete} handleEditName={handleEditName} />
        </ThemeProvider>
    </Container>

  );
}


