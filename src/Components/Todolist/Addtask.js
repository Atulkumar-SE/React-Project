import React from "react";

const Addtask = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      {/* Add Task */}
      <div className="row">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
            placeholder="Text here..."
          />
        </div>
        <div className="col-auto">
          <button onClick={addTask} className="btn btn-lg btn-info">
            Add Task
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default Addtask;
