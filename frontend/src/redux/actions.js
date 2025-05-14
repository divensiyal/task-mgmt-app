export const fetchTasks = () => async (dispatch) => {
  const res = await fetch("http://localhost:5000/api/tasks");
  const data = await res.json();
  dispatch({ type: "SET_TASKS", payload: data });
};

export const addTask = (task) => async (dispatch) => {
  const res = await fetch("http://localhost:5000/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  const data = await res.json();
  dispatch({ type: "ADD_TASK", payload: data });
};
