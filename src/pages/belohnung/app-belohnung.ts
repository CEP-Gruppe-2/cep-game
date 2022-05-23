import { CtLit, html, property, customElement, css } from '@conectate/ct-lit';

@customElement('app-belohnung')
export class Belohnung extends CtLit {

    static styles = css`
    :host {
        display: block;
    }
    `;

    render() {
        return html`<h1>Belohnung</h1>`;
    }
}