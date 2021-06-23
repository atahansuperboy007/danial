import deleteSvg from './img/delete.svg'
function ToDo({ todo, toggleTask, removeTask }) {
  return (
    <div key={todo.id} className="todo__item">
      <div
        className={todo.complete ? "item__text strike" : "item__text"}
        onClick={() => toggleTask(todo.id)}
      >
        {todo.task}
      </div>
      <div className="item__delete" onClick={() => removeTask(todo.id)}>
        <img src={deleteSvg} alt="" />
      </div>
    </div>
  );
}

export default ToDo;
