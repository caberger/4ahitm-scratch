import { ToDo } from "src/model"

const BASE_URL = "/api"

export async function loadAllToDos() {
    const response = await fetch(`${BASE_URL}/todos`)
    const todos: ToDo[] = await response.json()
    return todos
}