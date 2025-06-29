import { Col, Row } from "react-bootstrap";
import { FaTasks, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";
import "./DashboardCards.css";
function DashboardCards({ totalTasks, completedTasks, pendingTasks }) {
  return (
    <Row className="g-4">
      <Col xs={12} md={4}>
        <div className="card shadow rounded-4 total-task-card">
          <div className="card-body position-relative">
            <FaTasks className="position-absolute top-0 start-0 m-3 fs-3 text-primary" />
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <h5 className="card-title fs-5">Total Tasks</h5>
              <p className="card-text fs-1 fw-bold">{totalTasks}</p>
            </div>
          </div>
        </div>
      </Col>

      <Col xs={12} md={4}>
        <div className="card shadow rounded-4 completed-task-card">
          <div className="card-body position-relative">
            <FaCheckCircle className="position-absolute top-0 start-0 m-3 fs-3 text-success" />
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <h5 className="card-title fs-5">Completed Tasks</h5>
              <p className="card-text fs-1 fw-bold">{completedTasks}</p>
            </div>
          </div>
        </div>
      </Col>

      <Col xs={12} md={4}>
        <div className="card shadow rounded-4 pending-task-card">
          <div className="card-body position-relative">
            <FaHourglassHalf className="position-absolute top-0 start-0 m-3 fs-3 text-warning" />
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <h5 className="card-title fs-5">Pending Tasks</h5>
              <p className="card-text fs-1 fw-bold">{pendingTasks}</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default DashboardCards;
