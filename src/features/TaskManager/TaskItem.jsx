import React from 'react'
import Button from '../../components/Button'


export default function TaskItem({ task, onToggle, onDelete }) {
return (
<div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
<div className="flex items-center gap-3">
<input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
<div className={`text-sm ${task.completed ? 'line-through text-gray-400' : ''}`}>{task.text}</div>
</div>
<div className="flex items-center gap-2">
<Button variant="danger" onClick={() => onDelete(task.id)}>Delete</Button>
</div>
</div>
)
}