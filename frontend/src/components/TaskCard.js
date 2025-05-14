import React from "react";

function TaskCard({ task }) {
  return (
    <div className="card my-2">
      <div className="card-body">
        <h5>{task.title}</h5>
        <p>{task.details}</p>
        <span className="badge bg-secondary">{task.state}</span>
      </div>
    </div>
  );
}

export default TaskCard;
