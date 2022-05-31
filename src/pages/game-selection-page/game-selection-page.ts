import { unsafeCSS, html, LitElement } from 'lit';
import styles from './game-selection-page.scss?inline';

export class gameSelection extends LitElement {

  static styles = unsafeCSS(styles);

  render() {
    return html``;
  }
}

customElements.define('selection-page', gameSelection);

// declare global {
//   interface HTMLElementTagNameMap {
//     'gameSelection-page': Game-selection-page
//   }
// }
