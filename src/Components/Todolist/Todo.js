import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Todo.css";
import Addtask from "./Addtask";
import Updatetask from "./Updatetask";
import TodoForm from "./TodoForm";

function Todo() {
  //Tasks (ToDo List) State
  const [toDo, setToDo] = useState([
    { id: 1, title: "task 1", status: false },
    { id: 2, title: "task 2", status: false },
  ]);

  //Temp state
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  //Add Task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  //Delete Task
  const deleteTask = (id) => {
    let newTask = toDo.filter((task) => task.id !== id);
    setToDo(newTask);
  };

  //Mark task as done or complete
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  //cancle update
  const cancleUpdate = () => {
    setUpdateData("");
  };
  //change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };
  //update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  return (
    <div className="todo">
      <br />
      To Do List
      <br />
      <br />
      {/*Update Task */}
      {updateData && updateData ? (
        <Updatetask
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancleUpdate={cancleUpdate}
        />
      ) : (
        <Addtask newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      )}
      {/* display Todos*/}
      {toDo && toDo.length ? "" : "No Tasks..."}
      <TodoForm 
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default Todo;
