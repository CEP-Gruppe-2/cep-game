import { unsafeCSS, html, LitElement } from 'lit';
import {property} from 'lit/decorators.js';
import styles from './module-card.scss?inline';

/**
 * ModuleCard Component
 * @class
 * @exports
 * @public
 * @extends LitElement 
 */
export class ModuleCard extends LitElement {

  /**
   * @cssprop
   */
  static styles = unsafeCSS(styles);

  /**
   * @property {string} - Title of the Card
   */
  @property()
  cardTitle : string = '';

  /**
   * @property {string} - Description of the Card
  */
  @property()
  cardDescription = '';

  /**
   * @property {number} - Position of the Card
  */
  @property()
  cardPosition : number = 0;

  /**
   * @property {number} - Color of the Card
  */
  @property()
  cardColor = '';

  /**
   * @property {number} - Link to the Page
  */
  @property()
  cardLink = '';

  /**
   * @property {number} - Link of Card Image
  */
  @property()
  cardImageName = '';

  /**
   * Get next Chapter and Redirect to next Chapter
   * @private
   * @param e {Event} - Information about the Element
   * @returns {void} - 
   */
  private getChapter(e : Event): void {
    e.preventDefault(); // prevent rederecting by clicking
    if(this.cardTitle == 'Einleitung'){ // is clicked Card Title = Einleitung?
      this.dispatchEvent(new CustomEvent('einleitung-btn-clicked', {detail: this.cardLink})); // create Event und dispatch event
    }else{
      //let kapitel = this.cardTitle.replace(/[^a-zA-Z]/g, '');
      let kapitelNumber = this.cardTitle.replace(/[^0-9]/g, ''); // regex, title should contain only numbers
      location.href = '/chapter/' + kapitelNumber; // add to url number of chapter and redirect to the url
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