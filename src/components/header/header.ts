import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('header-component')
export class Header extends LitElement {

    static styles = css`
    :host{
        display: flex;
        width: 100%;
        height: 40px;
        border: 1px solid #000;
        justify-content: space-between;
        align-items: center;
    }

    `


    render() {
        return html`
            <a href="#start">SafeWise</a>
            <a href="#kurse">Kurse</a>
        `
    }

}

