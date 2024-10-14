import { loadAllTodos } from "./todo-service"

class TodoComponent extends HTMLElement {
    connectedCallback() {
       loadAllTodos() 
    }
}
customElements.define("todo-component", TodoComponent)