import { unsafeCSS, html, LitElement } from 'lit';
import styles from './notification.scss?inline';
import { property } from 'lit/decorators.js';
import { redirectToWithParameter } from '../../functions/redirect';

export class Notification extends LitElement {

  static styles = unsafeCSS(styles);

  @property({type: String})
    notification = '';

  @property({type: Number})
    timeout = 1000;


  private _closeNotification(e : Event){
    console.log('Notification wurde geschloßen');
    let event = new CustomEvent('notify', {detail: {
      message: 'Das ist Notification Komponent'
    }});

    this.dispatchEvent(event);

  }



  public _typeOfNotification(){
    let timer = this.timeout / 1000;
    let countDown = setInterval(() => {

      if (timer < 0) {
        redirectToWithParameter('/modul', '1', 'mod' );
      }

      console.log('ich teste mich aus');

      timer--;
    }, 1000);

    return html`
      <div class="notification-error notification-container">
        <div class="notification-box">
          <div class="notification-information">
            ${this.notification == 'error' ? html`
                <img src="res/icons/error.svg" alt=""/>
                <p class="notification-text">Ups... Das ist was schief gelaufen.</p>`: html`
                <img src="res/icons/success.svg" alt=""/>
                <p class="notification-text">Herzlichen Glückwunsch!</p>
              `}
          </div>
          <!-- Close Icon -->
          <img class="close-icon" src="res/icons/close.svg" @click=${(e : Event) => this._closeNotification(e)} alt="">
        </div>
      </div>
    `;
  }


  render() {

    return html`
      ${this._typeOfNotification()}
    `;
  }
}

customElements.define('notification-component', Notification);

// declare global {
//   interface HTMLElementTagNameMap {
//     'notification-c': Notification
//   }
// }
