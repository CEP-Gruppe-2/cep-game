import { unsafeCSS, html, LitElement } from 'lit';
import styles from './scaffold.scss?inline';

export class Scaffold extends LitElement {

  static styles = unsafeCSS(styles);

  render() {
    return html``;
  }
}

customElements.define('my-scaffold', Scaffold);

// declare global {
//   interface HTMLElementTagNameMap {
//     'my-scaffold': Scaffold
//   }
// }
