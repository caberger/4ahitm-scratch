class AppComponent extends HTMLElement {
    connectedCallback() {
        console.log("connected")
    }
}
customElements.define("app-component", AppComponent)