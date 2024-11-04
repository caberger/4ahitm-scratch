import { html, render } from "lit-html"
import "./todo"

const content = html`
    <div class="container">
        <todo-component></todo-component>
    </div>
`

class AppComponent extends HTMLElement {
    connectedCallback() {
        render(content, this)
    }
}
customElements.define("app-component", AppComponent)