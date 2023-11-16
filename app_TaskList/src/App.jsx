import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import TaskList from "./pages/TaskList";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      { path: "/", element: <Home /> }
    ],
  },
  {
    path: '/TaskList',
    element: <Layouts />,
    children: [
      {path: '/TaskList', element: <TaskList />}
    ]
  },
  {
    path: '/Register',
    element: <Layouts />,
    children: [
      {path: '/Register', element: <Register />}
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      {/* <Layouts>
         <Main />
      </Layouts> */}
    </>
  );
}

export default App;
