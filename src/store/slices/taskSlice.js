import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    tasks: [
        {
            id: 1,
            title: 'Task 1',
            description: 'Description 1',
            completed: false,
        }
    ]
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const taskWithId = {
                ...action.payload,
                id: Date.now(),
                completed: false
            }
            state.tasks.push(taskWithId)
        },
        toggleTaskComplete: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload)
            if (task) {
                task.completed = !task.completed
            }
        },
        editTask: (state, action) => {
            const {taskId, updatedTask} = action.payload
            const tasksIndex = state.task.findIndex(task => task.id === taskId)
            if (tasksIndex !== -1) {
                state.tasks[tasksIndex] = {
                    ...state.tasks[tasksIndex],
                    ...updatedTask
                }
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
    },
})

export const {addTask, toggleTaskComplete, editTask, deleteTask} = taskSlice.actions

export const selectTasks = state => state.task.tasks
export const selectPendingTasks = state => state.task.tasks.filter(task => !task.completed)
export const selectCompletedTasks = state => state.task.tasks.filter(task => task.completed)

export default taskSlice.reducer