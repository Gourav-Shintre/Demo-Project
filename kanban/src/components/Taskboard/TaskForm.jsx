import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import {
  useAddTaskMutation,
  useEditTaskMutation,
  useGetTaskIdQuery,
} from "../../redux/slices/apiSlice";
function TaskForm({ show, handleClose, taskId }) {
  const edit = taskId ? true : false;
  const { data: taskById } = useGetTaskIdQuery(taskId);
  const [addTaskData] = useAddTaskMutation();
  const [editTaskData] = useEditTaskMutation();
  const [addtask, setAddTask] = useState({
    name: "",
    priority: "",
    deadline: "",
  });

  useEffect(() => {
    if (edit && taskById) {
      const payload = {
        name: taskById?.name,
        priority: taskById?.priority,
        deadline: taskById?.deadline,
      };
      setAddTask(payload);
    }
  }, [taskById]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payoad = {
      id: edit ? taskById?.id : uuid(),
      status: edit ? taskById?.status : "Backlog",
      ...addtask,
    };

    if (edit) {
      try {
        let payloadData = await editTaskData(payoad);
        if (payloadData) {
          console.log("data added successfully");
          handleClose();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        let payloadData = await addTaskData(payoad);
        if (payloadData) {
          console.log("data added successfully");
          handleClose();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{edit ? "Edit Task" : "Create New Task"}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label className="fs-6 text-secondary">
                  Task Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter Task Name"
                  value={addtask.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="priority">
                <Form.Label className="fs-6 text-secondary">
                  Priority
                </Form.Label>
                <Form.Select
                  name="priority"
                  value={addtask.priority}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formDueDate">
                <Form.Label className="fs-6 text-secondary">
                  Due Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="deadline"
                  value={addtask.deadline}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary">
            {edit ? "Update" : "Create"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default TaskForm;
