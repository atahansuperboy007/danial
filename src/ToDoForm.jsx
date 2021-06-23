import React from "react";
import { useState } from "react";

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput)
    setUserInput("")
  };
  const handleKeyPress = (e) => {
      if(e.key == "Enter"){
          handleSubmit(e)
      }
  };
  return (
    <form className="todo__input">
      <input
        type="text"
        placeholder="Введите значение.."
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <a onClick={handleSubmit}>Добавить</a>
    </form>
  );
}

export default ToDoForm;
