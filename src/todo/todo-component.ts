import { html, render } from "lit-html"
import { loadAllToDos } from "./todo-service"
import { ToDo } from "src/model"

const content = (todos: ToDo[]) => html`
    <div>${todos.length} Todos</div>
`

class TodoComponent extends HTMLElement {
    async connectedCallback() {
       const todos = await loadAllToDos()
        render(content(todos), this)
    }
}
customElements.define("todo-component", TodoComponent)