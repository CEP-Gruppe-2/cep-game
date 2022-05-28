import { unsafeCSS, html, LitElement } from 'lit';
import styles from './module-page.scss?inline';

export class ModulePage extends LitElement {

  static styles = unsafeCSS(styles);

  render() {
    return html``;
  }
}

customElements.define('module-page', ModulePage);

// declare global {
//   interface HTMLElementTagNameMap {
//     'module-page': ModulePage
//   }
// }
