import { html, render } from "lit-html"
import { loadAllToDos } from "./todo-service"
import { ToDo } from "./todo"
const styles = html`
`
class TodoComponent extends HTMLElement {
    static observedAttributes = ["my-name", "keine-ahnung"]
    title: string
    todos: ToDo[] = []// das ist vollkommen falsch! siehe https://redux.js.org/understanding/thinking-in-redux/three-principles

    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }
    attributeChangedCallback(name: string, _: string, value: string) {
        console.log("attribute changed", name, value)
        switch(name) {
            case "my-name":
                console.log("name changed", name)
                this.title = value
                break;
            default:
                console.log("is ma wurscht")
        }
        this.render()
    }
    async connectedCallback() {
        this.todos = await loadAllToDos()
        this.render()
        const head = this.shadowRoot.querySelector("head")
        console.log("head is", head)
    }
    render() {
        render(this.tableTemplate(this.todos, this.title), this.shadowRoot)
    }
    tableTemplate(todos: ToDo[], title: string) {
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
        ${styles}
        <style>
        body {
            background-color: red;
        }
        </style>
        <div>
            <table>
                <caption>${title}</caption>
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
        </div>
        <hr/>
        <div>
            <button @click=${() => this.onButtonClicked()}>Press me!</button>
        </div>
    `
    }
    onButtonClicked() {
        const event = new CustomEvent("my-button-click", {detail: {"text": "ich wurde geklickt"}})
        this.dispatchEvent(event)
    }
}
customElements.define("todo-component", TodoComponent)