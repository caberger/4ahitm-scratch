import { html, render } from "lit-html"
import "./todo"

class AppComponent extends HTMLElement {
    connectedCallback() {
        render(this.content(), this)
    }
    content() {
        return html`
            <div class="container">
                <todo-component @my-button-click=${(event: CustomEvent) => this.onMyButtonClick(event)}
                    my-name="Meine Todos" keine-ahnung="7"></todo-component>
            </div>
            `
    }
    onMyButtonClick(event: CustomEvent) {
        console.log("event empfangen", event.detail.text)
        const todoComponent = this.querySelector("todo-component") as HTMLElement
        todoComponent.setAttribute("my-name", event.detail.text)
    }
}
customElements.define("app-component", AppComponent)

