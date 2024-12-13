import { html, render } from "lit-html"
import "./feature/chuck/chuck-norris-component"

class AppComponent extends HTMLElement {
    connectedCallback() {
        render(this.content(), this)
    }
    content() {
        return html`
            <div class="container">
                <chuck-norris @my-button-click=${(event: CustomEvent) => this.onMyButtonClick(event)}
                    my-name="Meine Todos" keine-ahnung="7"></chuck-norris>
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

