import React, { useState, useEffect } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import TaskItem from './TaskItem'
import Button from '../../components/Button'


const FILTERS = ['All', 'Active', 'Completed']


export default function TaskManager() {
const [tasks, setTasks] = useLocalStorage('tasks', [])
const [text, setText] = useState('')
const [filter, setFilter] = useState('All')


function addTask(e) {
e.preventDefault()
if (!text.trim()) return
const newTask = { id: Date.now().toString(), text: text.trim(), completed: false }
setTasks(prev => [newTask, ...prev])
setText('')
}


function toggleComplete(id) {
setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
}


function deleteTask(id) {
setTasks(prev => prev.filter(t => t.id !== id))
}


const filtered = tasks.filter(t =>
filter === 'All' ? true : filter === 'Active' ? !t.completed : t.completed
)


return (
<div className="space-y-4">
<form onSubmit={addTask} className="flex gap-2">
<input value={text} onChange={e => setText(e.target.value)} placeholder="Add a task" className="flex-1 p-2 rounded-md" />
<Button type="submit">Add</Button>
</form>


<div className="flex gap-2">
{FILTERS.map(f => (
<button key={f} onClick={() => setFilter(f)} className={`px-3 py-1 rounded-md ${filter===f? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
{f}
</button>
))}
</div>


<div className="space-y-2">
{filtered.length === 0 ? (
<div className="text-gray-500">No tasks</div>
) : (
filtered.map(task => (
<TaskItem key={task.id} task={task} onToggle={toggleComplete} onDelete={deleteTask} />
))
)}
</div>
</div>
)
}