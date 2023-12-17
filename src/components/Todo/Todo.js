const Todo = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="v bg-white p-4 mb-2 rounded shadow-md flex items-center justify-between w-80">
      <div
        className={`flex items-center ${
          todo.completed ? 'line-through text-gray-500' : 'text-gray-900'
        }`}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo._id)}
          className="mr-2 cursor-pointer"
        />
        <span className="flex-1">{todo.text}</span>
      </div>
      <button
        onClick={() => onDelete(todo._id)}
        className="text-red-500 hover:text-red-700 hover:bg-red-100 rounded-md"
      >
        Видалити
      </button>
    </div>
  );
};

export default Todo;
