import TaskItem from './TaskItem';
import { List, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function TaskList  ({ tasks, handleComplete, handleDelete, handleEditName }) {
  return (
    <>
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
    <Typography variant="h5" sx={{textAlign:'center'}}>
      Tareas
    </Typography>
    </Paper>
    <List>
    <Paper elevation={5}>
      <Grid container spacing={2} >
      {tasks.map((task) => (
         <TaskItem
          key={task.id}
          task={task}
          handleComplete={() => handleComplete(task.id)}
          handleDelete={() => handleDelete(task.id)}
          handleEditName={handleEditName}
        />
      ))}
    </Grid>
    </Paper>
    </List> 
   </>
  );
}