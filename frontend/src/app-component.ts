import { html, render } from "lit-html"
import "./feature/chuck/chuck-norris-component"
import "./feature/joke-counter/joke-counter"

class AppComponent extends HTMLElement {
    connectedCallback() {
        render(this.content(), this)
    }
    content() {
        return html`
            <div class="container">
                <chuck-norris @my-button-click=${(event: CustomEvent) => this.onMyButtonClick(event)}>
                </chuck-norris>
            </div>
            <div>
                <joke-counter></joke-counter>
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

