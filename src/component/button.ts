import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('button-component')
export class Button extends LitElement {



    

    static styles = css`
        :host{
            display: inline-block;
            padding: 15px 25px;
            font-size: 24px;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
            outline: none;
            color: #000000;
            background-color: #FFD700;
            border: none;
            border-radius: 15px;
            box-shadow: 0 9px #999;
        }
    `
    @property({type: String})
    textButton = "";

    render() {
    
        return html`
            ${this.textButton}
        `
    }

}

