const BASE_URL = "https://jsonplaceholder.typicode.com"

export async function loadAllTodos() {
    const todoURL = `${BASE_URL}/todos`
    const response = await fetch(todoURL)
    const todos = await response.json()
    console.log("todos: ", todos)
}