import React from "react";
import { Card } from "react-bootstrap";
import TaskCard from "./TaskCard";
import "./TaskColumn.css";
import DropArea from "./DropArea";
function TaskColumn({
  title,
  tasks,
  onMove,
  setTaskId,
  handleOpen,
  setActiveCard,
  onDrop,
}) {
  console.log(tasks, "TASKS");

  return (
    <Card className="flex-fill bg-white task-column">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-semibold text-center">{title}</Card.Title>
        <hr />
        <DropArea onDrop={() => onDrop(title, 0)} />
        <div className="flex-grow-1 overflow-auto">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <React.Fragment key={task.id}>
                <TaskCard
                  key={task.id}
                  task={task}
                  index={index}
                  column={title}
                  onMove={onMove}
                  setTaskId={setTaskId}
                  handleOpen={handleOpen}
                  setActiveCard={setActiveCard}
                />
                <DropArea onDrop={() => onDrop(title, index + 1)} />
              </React.Fragment>
            ))
          ) : (
            <>
              <div className="text-muted text-center mt-3">No tasks</div>
              <DropArea onDrop={() => onDrop(title, 0)} />
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default TaskColumn;
