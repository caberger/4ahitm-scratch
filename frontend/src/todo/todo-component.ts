import { html, render } from "lit-html"
import { loadAllToDos } from "./todo-service"
import { ToDo } from "src/model"

const tableTemplate = (todos: ToDo[]) => {
    const rows = todos.map(todo => 
        html`
            <tr>
            <th>${todo.id}</th>
            <th>${todo.userId}</th>
            <th>${todo.title}</th>
            <th>${todo.completed ? "👍" : "😢"}</th>            
            </tr>
        `
    )
    return html`
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>UserId</th>
                <th>Title</th>
                <th>Completed</th>
            </tr>
        </thead>
        <tbody>
            ${rows}
        </tbody>
    </table>
`
}
class TodoComponent extends HTMLElement {
    async connectedCallback() {
        const todos = await loadAllToDos()
        render(tableTemplate(todos), this)
    }
}
customElements.define("todo-component", TodoComponent)