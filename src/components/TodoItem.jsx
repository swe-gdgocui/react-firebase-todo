import { useState } from "react"

export default function TodoItem({ todo, toggleTodo, editTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleEdit = () => {
    if (editText.trim() !== "") {
      editTodo(todo.id, editText)
      setIsEditing(false)
    }
  }

  return (
    <li className="flex items-center space-x-3">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyPress={(e) => e.key === "Enter" && handleEdit()}
          className="flex-1 px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          autoFocus
        />
      ) : (
        <span
          className={`flex-1 ${todo.completed ? "line-through text-gray-400" : ""}`}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}
      <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700 focus:outline-none">
        Delete
      </button>
    </li>
  )
}

