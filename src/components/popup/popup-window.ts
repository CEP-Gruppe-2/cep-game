import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('popup-window')
export class Popup extends LitElement {

    @property()
    popupTitle = ""

    @property()
    popupDescrtiption = ""

    @property()
    gratulation = ""

    static styles = css`
        
        :host{
            width: 100vw;
            height: 100vh;
            display: block;
            position: absolute;
            background-color: rgba(74,74,80,0.8);
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;

        }

        .popup-window{
            width: 300px;
            height: 350px;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #fff;
            text-align: center;
            padding: 1em;
            margin: auto;
            border-radius: 10px;
            box-sizing: border-box;
            display: block;
            opacity: 100%;
            z-index: 2000;
        }

        *, *:before, *:after {
            box-sizing: inherit;
        }

        .popup-input{
            width: 100%;
        }

        .popupTitle{
            font-size: 40px;
            font-weight: 500;
            font-style: normal;
            padding: 0;
            margin: 0.25em 0 0 0;
            color: #000;
        }


        .popupDescription, .gratulation{
            font-size: 1em;
            font-weight: 400;
            font-style: normal;
            padding: 0;
            margin: 0.5em 0 0 0;
            color: #787878;
            text-align: left;
        }

        .popup-input{
            margin: 1em 0 0 0;
            padding: 0.5em;
            border-radius: 8px;
            border: 1px solid #68C382;
            text-align: left;
            color: #68C382;
            width: 100%;
        }

        .pop-btn{
            margin: 1em 0 0 0;
            padding: 0.5em 0;
            width: 60%;
            text-align: center;
            color: #fff;
            background-color: #68C382;
            border-radius: 8px;
            border: none;
        }

        .close-icon{
            text-align: right;
            cursor: pointer;
        }

    `

  render() {
    return html`

        <div class="popup-window">
            <div class="close-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 2.41714L21.5829 0L12 9.58286L2.41714 0L0 2.41714L9.58286 12L0 21.5829L2.41714 24L12 14.4171L21.5829 24L24 21.5829L14.4171 12L24 2.41714Z" fill="black"/>
                </svg>
            </div>

            <h2 class="popupTitle">
                ${this.popupTitle}
            </h2>

            <p class="popupDescription">
                ${this.popupDescrtiption}
            </p>

            <p class="gratulation">
                ${this.gratulation}
            </p>

            <input class="popup-input" type="text" name="popup-input" id="popup-input"/>

            <button class="pop-btn" type="submit">Los geht's</button>
        </div> 

    `
  }
}