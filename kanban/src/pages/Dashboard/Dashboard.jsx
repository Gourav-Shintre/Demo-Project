import { Spinner } from "react-bootstrap";
import ChartDashboard from "../../components/Dashboard/ChartDashboard";
import DashboardCards from "../../components/Dashboard/DashboardCards";
import { useGetTasksQuery } from "../../redux/slices/apiSlice";

function Dashboard() {
  const { data: tasks, isLoading } = useGetTasksQuery();
  const totalTasks = tasks?.length;
  const completedTasks = tasks?.filter((task) => task.status === "Done").length;
  const pendingTasks = tasks?.filter((task) => task.status !== "Done").length;

  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  }
  return (
    <>
      <div className="p-4">
        <h2 className="mb-4 ">Dashboard Overview</h2>
        <DashboardCards
          totalTasks={totalTasks}
          completedTasks={completedTasks}
          pendingTasks={pendingTasks}
        />
        <ChartDashboard tasks={tasks} />
      </div>
    </>
  );
}

export default Dashboard;
