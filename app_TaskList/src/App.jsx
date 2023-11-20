import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";

import Register from "./pages/Register";
import AdminTaskList from "./pages/AdminTaskList";




const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      { path: "/", element: <Home /> }
    ],
  },
  {
    path: '/AdminTaskList',
    element: <Layouts />,
    children: [
      {path: '/AdminTaskList', element: <AdminTaskList />}
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
    </>
  );
}

export default App;
