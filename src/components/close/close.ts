import styles from './close.scss?inline';

/**
 * Close Component
 * @class
 * @exports
 * @public
 * @extends HTMLElement
 */
export class Close extends HTMLElement {


  /**
   * Life Cycle Function from Lit ELements
   * @returns {void}
   */
  connectedCallback() : void{

    this.attachShadow({mode: 'open'});

    //create close Icon
    this.shadowRoot!.innerHTML = /*html*/`
      
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/>
      </svg>
      
      <style>
        ${styles}
      </style>
    `;
  }

}

customElements.define('close-component', Close);

