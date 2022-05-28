import styles from './scaffold.scss?inline';

export class Scaffold extends HTMLElement {

  constructor() {
    super();
  }
  
  connectedCallback() {
    this.attachShadow({mode: 'open'});

    this.shadowRoot!.innerHTML = /*html*/`

    <style>
      ${styles}
    </style>
  `;
  }

}

customElements.define('my-scaffold', Scaffold);

// declare global {
//   interface HTMLElementTagNameMap {
//     'my-scaffold': Scaffold
//   }
// }
