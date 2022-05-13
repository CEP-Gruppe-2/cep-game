import { CtLit, html, property, customElement, css } from '@conectate/ct-lit';
import '../../../component/moduls-card'
import { cardData } from '../../../data/card.data';
import "../../../component/popup-modul";
import Cookies from 'js-cookie'
import { redirectTo } from '../../../functions/redirect';

@customElement('home-app')
export class HomeApp extends CtLit {
	static styles = [
		css`
			:host {
				display: block;
			}

			.flex-card{
				display: flex;
				overflow-x: auto;
				height: 100%;
				width: 100%;
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

	private cardLink : String;
	private popupEntryExist : Boolean;
	private showPopup : Boolean;

	constructor() {
		super();
		this.showPopup = false;
		if(Cookies.get('einleitung') != undefined){
			this.popupEntryExist = true;
		}
	  }

	_wup(e : any){
		console.log(e.detail);
		console.log(e);
		
	}

	private _configurePopup(e : Event): void{
		
		this.cardLink = e.detail;

		if(Cookies.get('einleitung') != undefined){
			
			if (this.popupEntryExist && this.showPopup) {
				
			}else if(this.popupEntryExist && !this.showPopup){
				this.showPopup = true;
				this.update();
			}
		}else{
			Cookies.set('einleitung', true, { expires: 7, path: '' })
			this.popupEntryExist = true;
			redirectTo(this.cardLink, "")
		}

		console.log(`${this.showPopup}, ${this.popupEntryExist}`);
	}

	_displayPopup(){
		if(this.showPopup){
			return html` <popup-moduls id="popup-moduls" @custom="${this._wup}" popupNextPageLink="${this.cardLink}" @close-component="${this._closeComponent}"></popup-moduls>`
		}else{ return html ``; }
	}

	_closeComponent(){
		this.showPopup = false; 
		this.update();

		console.log(`${this.showPopup}, ${this.popupEntryExist}`);
	}

	render() {
		
		return html`
			${this._displayPopup()}
			<h2 class="page-header">Module</h2>
			<div class="flex-card">
				${cardData.map((card, index) => 
					html`
					<card-moduls .cardTitle=${card.title}
						.cardDescription=${card.description} 
						.cardPosition=${index+1} 
						.cardLink=${card.link}
						.cardImageName=${card.cardImageName}
						
						@einleitung-btn-clicked="${this._configurePopup}"
						style="background-color: ${card.color};"></card-moduls>`
				)}
      		</div>
		`;
	}
}
