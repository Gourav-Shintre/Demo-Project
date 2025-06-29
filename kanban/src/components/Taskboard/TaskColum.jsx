import React from "react";
import { Card } from "react-bootstrap";
import TaskCard from "./TaskCard";

function TaskColumn({ title, tasks, onMove,setTaskId,handleOpen }) {
  return (
    <Card className="flex-fill bg-white" style={{ width: "100px", height: "750px" }}>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-semibold text-center">{title}</Card.Title>
        <hr />
        <div className="flex-grow-1 overflow-auto">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                column={title}
                onMove={onMove}
                setTaskId={setTaskId}
                handleOpen={handleOpen}
              />
            ))
          ) : (
            <div className="text-muted text-center mt-3">No tasks</div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default TaskColumn;
