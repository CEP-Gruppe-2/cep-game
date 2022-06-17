import { unsafeCSS, html, LitElement } from 'lit';
import styles from './module-popup.scss?inline';
import {property} from 'lit/decorators.js';
import '../close';

/**
 * @module ModulePopup
 * @class
 * @exports
 * @public
 */
export class ModulePopup extends LitElement {

  /**
   * Css Style
   * @cssprop
   */
  static styles = unsafeCSS(styles);

  /** @property {Boolean} - Redirect true or not */
  @property() popupRedirect : Boolean = false;

  /** @property {Boolean} - Set popup visible or not */
  @property() popupVisible = false;

  /** @property {string} - Text for the popup*/
  @property() popupText : string = '';

  /** @property {string} - Redirect Link to another Page */
  @property() popupNextPageLink : string = '';

  /** @param e {Event} - Close Component and create dispatchEvent with event Details */
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

customElements.define('module-popup', ModulePopup);

