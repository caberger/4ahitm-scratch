import { html, render } from "lit-html"
import "./todo"

const content = html`
    <div class="container">
        <todo-component my-name="Meine Todos" keine-ahnung="7"></todo-component>
    </div>
`

class AppComponent extends HTMLElement {
    connectedCallback() {
        render(content, this)
    }
}
customElements.define("app-component", AppComponent)