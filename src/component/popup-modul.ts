import { css, customElement, html, LitElement, unsafeHTML } from '@conectate/ct-lit';
import { property } from 'lit/decorators.js';
import "./close";

@customElement('popup-moduls')
export class Popup extends  LitElement {

	static styles = [
		css`
            *, *:before, *:after {
                box-sizing: inherit;
            }

			:host{
				width: 80%;
                height: 270px;
                background-color: #fff;
                padding: 1em;
                margin: auto;
                display: block;
                position: absolute;
                bottom: 0; top: 0; left: 0; right: 0;
                
                z-index: 500;
                border: none;
                border-radius: var(--border-radius);
			}

            @media only screen and (min-width: 600px) {
                :host{
                    width: 500px;
                }
            }

            .popup-moduls-title{
                display: block;
                margin: 1em 0 0 0;
                padding: 0;
                text-align: center;
                font-size: var(--popup-title-fontsize);
                font-weight: 500;
                font-style: normal;
                color: #000;
            }

            .popup-moduls-paragraph{
                display: block;
                margin: 1em 0 0 0;
                padding: 0;
                text-align: left;
                font-size: var(--popup-paragraph-fontsize);
                font-weight: 500;
                font-style: normal;
                color: #000;
            }

            .popup-moduls-btn{
                display: block;
                width: 160px;
                padding: 0.5em 1em;
                margin: 1em auto;
                color: #fff;
                text-align: center;
                background-color: #68C382;
                border: none;
                text-decoration: none;
            }

            .popup-moduls-btn:hover{
                color: #68C382;
                text-align: center;
                background-color: #fff;
                border: 1px solid #cfcfcf;
            }

            close-component{
                display: block;
                float: right;
                cursor: pointer;
            }


		`
	];

    @property({type: Boolean}) popupRedirect = false;
    @property({type: Boolean}) popupVisible = false;
    @property({type: String}) popupText = "";
    @property({type: String}) popupNextPageLink = "";

    _closeComponent(e : Event){
        this.dispatchEvent(new CustomEvent('close-component', { detail: e }));
    }

	render() {

		return html`
            <close-component @click="${(e : Event) => this._closeComponent(e)}"></close-component>
            <h2 class="popup-moduls-title">
                Willkommen zurück!
            </h2>
            <p class="popup-moduls-paragraph">
                Wir haben festgestellt, dass du die Einleitung bereits durchgegangen bist, 
                deshalb siehst du jetzt dieses Popup. Wenn du sie noch einmal 
                durchgehen möchtest, klicke einfach auf die Schaltfläche unten, 
                ansonsten klicke auf das Kreuz in der rechten Ecke
            </p>
            <a href="${this.popupNextPageLink}" class="popup-moduls-btn">Fortfahren</a>
		`;
	}
}
