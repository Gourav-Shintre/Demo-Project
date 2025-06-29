import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { FaTasks, FaChartBar } from "react-icons/fa";
import { Card, Col, Row } from "react-bootstrap";

const statusColors = ["#a9dfbf", "#ffe082", "#b2ebf2"];
const priorityColors = ["#f5b7b1", "#ffb74d", "#d6d8db"];

function ChartDashboard({ tasks }) {
  const statusCount = {
    completed: tasks.filter((t) => t.status === "Done").length,
    inProgress: tasks.filter((t) => t.status === "In Progress").length,
    pending: tasks.filter((t) => t.status !== "Done").length,
  };

  const statusData = [
    { name: "Completed", value: statusCount.completed },
    { name: "Pending", value: statusCount.pending },
    { name: "In Progress", value: statusCount.inProgress },
  ];

  const priorityCount = {
    High: tasks.filter((t) => t.priority === "High").length,
    Medium: tasks.filter((t) => t.priority === "Medium").length,
    Low: tasks.filter((t) => t.priority === "Low").length,
  };

  const priorityData = [
    { name: "High", value: priorityCount.High },
    { name: "Medium", value: priorityCount.Medium },
    { name: "Low", value: priorityCount.Low },
  ];

  return (
    <div className="mt-5 container">
      <h3 className="mb-4 text-center fw-bold"> Task Overview</h3>
      <Row>
        {/* Pie Chart: Task Status */}
        <Col xs={12} md={6} className="mb-4">
          <Card className="shadow p-3 h-100">
            <h5 className="text-center mb-3 text-success">
              <FaTasks className="me-2" />
              Tasks by Status
            </h5>
            <div className="d-flex justify-content-center">
              <PieChart width={350} height={350}>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={statusColors[index % statusColors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </Card>
        </Col>

        {/* Bar Chart: Task Priority */}
        <Col xs={12} md={6} className=" mb-4">
          <Card className="shadow p-3 h-100">
            <h5 className="text-center mb-3 text-primary">
              <FaChartBar className="me-2" />
              Tasks by Priority
            </h5>
            <div className="d-flex justify-content-center">
              <BarChart width={450} height={350} data={priorityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#007bff">
                  {priorityData.map((entry, index) => (
                    <Cell
                      key={`cell-bar-${index}`}
                      fill={priorityColors[index % priorityColors.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ChartDashboard;
