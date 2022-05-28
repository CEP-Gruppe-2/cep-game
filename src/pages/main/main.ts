import {html, LitElement, unsafeCSS} from 'lit';
import styles from './main.scss?inline';

import cards from '../../data/cards.json';
import '../../components/module-card';
import '../../components/module-popup';
import {redirectTo} from '../../functions/redirect';
import {state} from 'lit/decorators.js';

export class Main extends LitElement {

  static styles = unsafeCSS(styles);

  @state()
  private showPopup : Boolean = false;
  private cardLink: String = '';


  _wup(e : any){
    console.log(e.detail);
    console.log(e);

  }

  private _showPopup(e : Event): void{

    console.log();
    // @ts-ignore
    this.cardLink = e.detail;

    if(localStorage.getItem('points')){
      redirectTo(this.cardLink, '');
    } else {
      this.showPopup = true;
    }

  }

  _closeComponent(){
    this.showPopup = false;
  }

  render() {
    console.log(cards);
    return html`
			${this.showPopup? html`<module-popup @custom="${this._wup}" popupNextPageLink="${this.cardLink}" @close-component="${this._closeComponent}"></module-popup>` : ''}
			<h2 class="page-header">Module</h2>
			<div class="flex-card">
				${cards.map((card: any, index: number) => html`
					<module-card .cardTitle=${card.title}
						.cardDescription=${card.description} 
						.cardPosition=${index+1} 
						.cardLink=${card.link}
						.cardImageName=${card.cardImageName}
						
						@einleitung-btn-clicked="${this._showPopup}"
						style="background-color: ${card.color};">
          </module-card>`)}
      </div>
		`;
  }
}

customElements.define('main-page', Main);

// declare global {
//   interface HTMLElementTagNameMap {
//     'main-page': Main
//   }
// }
