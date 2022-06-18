import styles from './button.scss?inline';

/**
 * Button Component
 * @class
 * @exports
 * @public
 * @extends HTMLElement
 */
export class Button extends HTMLElement {

  /**
   * Life Cycle Function from Lit Element
   * @returns {void}
   */
  connectedCallback(): void {
    this.attachShadow({mode: 'open'});

    /**
     * Create Button with imported Style
     */
    this.shadowRoot!.innerHTML = /*html*/`
      <slot></slot>
      <style>
        ${styles} 
      </style>
    `;
  }
}

customElements.define('my-button', Button);