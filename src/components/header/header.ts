import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('header-component')
export class Header extends LitElement {

    static styles = css`
    :host{
        display: flex;
        width: 100%;
        height: 60px;
        //border: 1px solid #000;
        justify-content: space-between;
        align-items: center;
        padding: 0 1em 0 1em;
        flex-wrap: nowrap;
        box-sizing: border-box;
    }

    .text-decoration-none{
            text-decoration: none ;
    }

    .header-btn{
        text-align: center;
        text-shadow: none;
        font-size: 1.25em;
        font-style: solid;
        font-weight: 400;
        font-family: "Arial";
        color: #000;
    }

    .header-btn-course{
        color: #68C382 !important; 
    }

    .header-btn-course:hover{
        color: #1B9A3F !important;
    }
    `

    render() {
        return html`
            <a class="text-decoration-none header-btn" href="#start">SafeWise</a>
            <a class="text-decoration-none header-btn header-btn-course" href="#kurse">Kurse</a>
        `
    }

}

