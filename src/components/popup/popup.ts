import { unsafeCSS, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import '../close';
import styles from './popup.scss?inline';

export class Popup extends LitElement {

  static styles = unsafeCSS(styles);

  @property({ type: String }) inputValue = '';
  @property({ type: Boolean }) componentVisible = false;


  _closePopup(){

  }

  _saveName(){
    localStorage.setItem('name', 'asdasda');
    this._closePopup();
    this.componentVisible = false;
  }

  _getInputValue(event: Event){
    // @ts-ignore
    this.inputValue = event.target.value;
  }

  render() {
    if(this.componentVisible){
      return html`
        <close-component @click="${this._closePopup}"></close-component>
        <h3 class="popup-title">
          Willkommen!
        </h3>
        <p class="popup-paragraph">
          Willkomen bei unserer Awareness Schulung. Wir wollen dich mit deinem Namen ansprechene, 
          deswegen bitten wir dich deinen Namen einzugeben und dann kannst du mit unserer Schulung loslegen!
          <br><br>
          Wir wünschen dir Viel Erfolg!
        </p>
        <input class="popup-input" type="text" @input="${this._getInputValue}" id="popup-input" placeholder="Bitte gib hier deinen Namen an" value="asdasda"/>
        <button class="popup-btn" @click="${this._saveName}">Klicken</button>
      `;
    } else {
      let host = this.shadowRoot?.host;
      host?.classList.add('hide-block');

      return html``;
    }
  }
}

customElements.define('pop-up', Popup);

// declare global {
//   interface HTMLElementTagNameMap {
//     'pop-up': Popup
//   }
// }
