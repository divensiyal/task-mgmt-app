import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import { useNavigate } from "react-router-dom";

function NewTask() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ title, details }));
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className="form-control mb-2" placeholder="Details" value={details} onChange={(e) => setDetails(e.target.value)} />
        <button className="btn btn-success" type="submit">Add</button>
      </form>
    </div>
  );
}

export default NewTask;
