
import { css, customElement, html, LitElement } from '@conectate/ct-lit';
import { property } from 'lit/decorators.js';


@customElement('card-moduls')
export class Card extends  LitElement {

	static styles = [
		css`
			:host{
                display: block;
                flex: 1;

                margin-top: 1em;
                margin-left: 0;
                margin-right: 1em;
                margin-bottom: 0;

                height: 350px;
                min-height: 350px;
                max-height: 350px;

                width: 250px;
                min-width: 70vw;
                max-height: 300px;
                padding: 1em;

                border: none;
                border-radius: var(--border-radius);
                position: relative;
                overflow: hidden;
			}

            @media only screen and (min-width: 392px) {
                :host{
                    min-width: 250px;
                }
            }

            .card-text-box{
                display: block;
                width: 100%;
                height: auto;

                padding: 0;

                margin-top: 100px;
                margin-left: 0;
                margin-right: 0;
                margin-bottom: 0;
            }

            .card-header{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }

            /* Small screen devices (600px and above) */
			@media only screen and (min-width: 600px) {}
			
			/* Medium screen devices (768px and above) */
			@media only screen and (min-width: 768px) {}
			
			/* Big screen devices (889px and above) */
			@media only screen and (min-width: 889px) {}
			
			/* Extra big screen devices (1200px and above) */
			@media only screen and (min-width: 1200px) {}

		`
	];

    @property({type: String})
    cardTitle = "";

    @property({type: String})
    cardDescription = "";

    @property({type: Number})
    cardPosition = 0;

    @property({type: String})
    cardColor = "";

    @property({type: String})
    cardLink = "";

    @property({type: String})
    cardImageName = "";

    private getKapitel(e : Event, cardLink : String) {
        e.preventDefault();
        if(this.cardTitle == 'Einleitung'){
            this.dispatchEvent(new CustomEvent('einleitung-btn-clicked', {detail: cardLink.toLowerCase()}));
        }else{
            let kapitel = this.cardTitle.replace(/[^a-zA-Z]/g, '');
            let kapitelNumber = this.cardTitle.replace(/[^0-9]/g, '')
            location.href = '/kapitel/' + kapitelNumber
        }
    }

	render() {
		return html`
			<img src="${this.cardImageName}" class="card-icon"/>
            <div class="card-text-box">
                <!--<span class="card-number">${this.cardPosition}</span>-->
                <div class="card-header">
                    <h2 class="card-title">
                        ${this.cardTitle}
                    </h2>
                    <a class="card-arrow-btn" href="#kapitel" @click="${(e : Event) => this.getKapitel(e, this.cardTitle)}">
                        <img class="card-arrow" src="res/icons/icon-arrow.svg"/>  
                    </a>
                </div>
                <hr class="card-break-line"/>
                <p class="card-description">${this.cardDescription}</p>
            </div>
		`;
	}
}
