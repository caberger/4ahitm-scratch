import { html, render } from "lit-html";
import { ChuckNorris } from "./chuck"
import { loadRandomJoke } from "./chuck-service"

class ChuckNorrisComponment extends HTMLElement {
    joke: ChuckNorris
    async connectedCallback() {
        console.log("Chuck connected")
        this.joke = await loadRandomJoke()
        this.render()
    }
    render() {
        const jokeText = this.joke.jokeText
        render(this.template(jokeText), this)
    }
    template(jokeText: string) {
        console.log("render", jokeText)
        return html`
            <style>
                #chuck {
                    max-height: 12rem;
                }
                #joketext {
                    width: 24rem;
                }
                .reload {
                    cursor: pointer;
                }
            </style>
            <div class="flex-container container" style="width: 100%">
                <div class="grow-1">
                    <hgroup>
                    <h2>Chuck Norries</h2>
                    <p>Programmer Jokes</p>
                    </hgroup>
                </div>
                <div class="grow-1 center"><img id="chuck" src="./images/chuck.jpg"/></div>
                <div id="joketext" class="grow-1" >
                    ${jokeText}&nbsp;
                    <div class="reload" @click=${() => this.reload()}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/></svg>
                    </div>
                </div>
            </div>
        `
    }
    async reload() {
        this.joke = await loadRandomJoke()
        this.render()
    }
}
customElements.define("chuck-norris", ChuckNorrisComponment)

function template(joke: String) {
}