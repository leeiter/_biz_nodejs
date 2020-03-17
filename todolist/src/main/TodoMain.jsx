import React from "react";
import "./TodoMain.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

// const TodoMain = ({ form, todolist }) => {
const TodoMain = ({ value }) => {
  return (
    <main className="todoTemplete">
      <div className="title">할일</div>
      <div className="form-controller">
        <TodoForm value={value} />
      </div>
      <div className="todolist-controller">
        <TodoList />
      </div>
    </main>
  );
};

export default TodoMain;
