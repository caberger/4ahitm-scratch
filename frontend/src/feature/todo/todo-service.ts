import { ToDo } from "./todo"

const BASE_URL = "/api"

export async function loadAllToDos() {
    const response = await fetch(`${BASE_URL}/todos`)
    const todos: ToDo[] = await response.json()
    return todos
}