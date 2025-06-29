import { Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import AuthLayout from "../layout/AuthLayout";
import Register from "../pages/Auth/Register";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import TaskBoard from "../pages/Tasks/TaskBoard";

function AppRoute() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register/>}/>
      </Route>
        <Route element={<MainLayout/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/tasks" element={<TaskBoard/>}/>
        </Route>
    </Routes>
  );
}

export default AppRoute;
