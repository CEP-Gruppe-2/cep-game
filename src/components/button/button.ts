import styles from './button.scss?inline';

export class Button extends HTMLElement {

  connectedCallback() {
    this.attachShadow({mode: 'open'});

    this.shadowRoot!.innerHTML = /*html*/`
      <slot></slot>
      <style>
        ${styles}
      </style>
    `;
  }

}

customElements.define('my-button', Button);

// declare global {
//   interface HTMLElementTagNameMap {
//     'my-button': Button
//   }
// }
