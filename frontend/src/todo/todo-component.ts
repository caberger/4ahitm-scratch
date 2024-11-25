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
    <style>
    body {
        background-color: red;
    }
    </style>

    <table>
        <thead id="head">
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
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }
    async connectedCallback() {
        const todos = await loadAllToDos()
        render(tableTemplate(todos), this.shadowRoot)
        const head = this.shadowRoot.querySelector("head")
        console.log("head is", head)
    }
}
customElements.define("todo-component", TodoComponent)