import { Model, subscribe } from "../model"

class JokeCounterComponent extends HTMLElement {
    
    connectedCallback() {
        console.log("JokeCounter connected")
        subscribe(model => this.render(model))
    }    
    render(model: Model) {
        console.log("render model")
        this.innerHTML = /*html*/`<span>(${model.numberOfJokesShown})</span>`
    }
}
customElements.define("joke-counter", JokeCounterComponent)