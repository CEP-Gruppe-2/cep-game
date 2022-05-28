import { unsafeCSS, html, LitElement } from 'lit';
import {property} from 'lit/decorators.js';
import styles from './module-card.scss?inline';


export class ModuleCard extends LitElement {

  static styles = unsafeCSS(styles);

  @property()
    cardTitle = '';

  @property()
    cardDescription = '';

  @property({type: Number})
    cardPosition = 0;

  @property()
    cardColor = '';

  @property()
    cardLink = '';

  @property()
    cardImageName = '';

  private getChapter(e : Event) {
    e.preventDefault();
    if(this.cardTitle == 'Einleitung'){
      this.dispatchEvent(new CustomEvent('einleitung-btn-clicked', {detail: this.cardLink}));
    }else{
      //let kapitel = this.cardTitle.replace(/[^a-zA-Z]/g, '');
      let kapitelNumber = this.cardTitle.replace(/[^0-9]/g, '');
      location.href = '/chapter/' + kapitelNumber;
    }
  }

  render() {
    return html`
			<img src="${this.cardImageName}" class="card-icon" alt=""/>
        <div class="card-text-box">
          <!--<span class="card-number">${this.cardPosition}</span>-->
          <div class="card-header">
            <h2 class="card-title">
              ${this.cardTitle}
            </h2>
            <a class="card-arrow-btn" @click="${(e : Event) => this.getChapter(e)}">
              <img class="card-arrow" src="res/icons/icon-arrow.svg" alt=""/>  
            </a>
          </div>
          <hr class="card-break-line"/>
          <p class="card-description">${this.cardDescription}</p>
        </div>
		`;
  }
}

customElements.define('module-card', ModuleCard);

// declare global {
//   interface HTMLElementTagNameMap {
//     'module-card': ModuleCard
//   }
// }
