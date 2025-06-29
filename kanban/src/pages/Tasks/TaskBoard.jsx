import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import TaskColumn from "../../components/Taskboard/TaskColum";
import {
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "../../redux/slices/apiSlice";
import TaskForm from "../../components/Taskboard/TaskForm";

function TaskBoard() {
  const columns = ["Backlog", "To Do", "In Progress", "Done"];
  const { data: tasksdata } = useGetTasksQuery();
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState("");
  const [activeCard, setActiveCard] = useState(null);
  const [updateTaskStatus] = useUpdateTaskMutation();
  useEffect(() => {
    if (tasksdata) {
      setTasks(tasksdata);
    }
  }, [tasksdata]);
  console.log(activeCard, "AC");

  //Create Task Modal
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  //Edit Task Modal

  const handleMove = async (id, direction) => {
    const task = tasks.find((t) => t.id === id);
    const index = columns.indexOf(task.status);
    const newIndex = index + direction;
    let payload = {
      id: id,
      status: columns[newIndex],
    };
    try {
      await updateTaskStatus(payload);
    } catch (error) {
      console.log(error);
    }
  };

  const taskModal = () => {
    if (showModal) {
      return (
        <TaskForm show={showModal} handleClose={handleClose} taskId={taskId} />
      );
    }
  };

  const onDrop = (status, position) => {
    if (activeCard === null || activeCard === undefined) return;

    const taskToMove = tasks.find((task) => task.id === activeCard);
    if (!taskToMove) return;

    const updatedTasks = tasks.filter((task) => task.id !== activeCard);
    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status,
    });

    setTasks(updatedTasks);

    // Optional: update status in DB
    updateTaskStatus({ id: activeCard, status });
  };

  return (
    <div className="fluid-container mt-3 p-4">
      {taskModal()}
      {/* Header */}
      <Row className="mb-3 align-items-center">
        <Col xs={12} md={6}>
          <h4 className="fw-bold">Kanban Taskboard</h4>
        </Col>
        <Col xs={12} md={6} className="text-end">
          <Button variant="success" onClick={handleOpen}>
            Create Task
          </Button>
        </Col>
      </Row>

      {/* Columns */}
      <div className="d-flex gap-3">
        {columns.map((column) => (
          <TaskColumn
            key={column}
            title={column}
            tasks={tasks.filter((task) => task.status === column)}
            onMove={handleMove}
            setTaskId={setTaskId}
            handleOpen={handleOpen}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskBoard;
