import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('nav-bar')
export class NavBar extends LitElement {

    static styles = css`
    :host{
        display: flex;
        color: white;
        background-color:#1B1B1B;
        margin-bottom: 10px;
        font-size: 20px;
        padding: 10px;

        justify-content: space-between;
        direction: rtl;
    }
    `

    @property({type: String})
    dir = ""

    @property({type: String})
    username = ""

    render() {
        return html`
        <div>
            Hello ${this.username}
        </div>
        ${this.dir == "" ? '' : html`
        <div>
            ${this.dir}
            <button @click="${this.back}">
                Back
            </button>
        </div>
        `}
        `
    }

    back(): void {
        console.log("clicked")
        this.dispatchEvent(new CustomEvent('back', {bubbles: true, composed: true}));
    }

}

