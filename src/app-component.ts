import { html, render } from "lit-html"
import "./todo"

const content = html`
    <todo-component></todo-component>
`

class AppComponent extends HTMLElement {
    connectedCallback() {
        render(content, this)
    }
}
customElements.define("app-component", AppComponent)