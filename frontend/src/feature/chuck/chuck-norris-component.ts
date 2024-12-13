import { ChuckNorris } from "./chuck"
import { loadJokes } from "./chuck-service"

class ChuckNorrisComponment extends HTMLElement {
    jokes: ChuckNorris[]

    async connectedCallback() {
        console.log("Chuck connected")
        this.jokes = await loadJokes();
        console.log("jokes loaded", this.jokes)
    }
}
customElements.define("chuck-norris", ChuckNorrisComponment)