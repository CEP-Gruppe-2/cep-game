import { unsafeCSS, html, LitElement } from 'lit';
import styles from './onboarding.scss?inline';

import '../../components/popup';

export class Onboarding extends LitElement {

  static styles = unsafeCSS(styles);

  render() {
    return html`
        <div class="onboarding-images-section flex-half">
            <!-- Images -->
        </div>
        <div class="onboarding-text-section flex-half">
            <header-component></header-component>

            <div class="text-section">

                <h3 class="text-section-title">
                    <span class="bold">Awareness Schulung.</span> <br>
                    <span class="thin">Alles rund um</span>  <span class="bold">OT-Security</span>
                </h3>

                <p class="text-section-paragraph">
                    Unser SafeWise-Team hat dieses Projekt ins Leben
                    gerufen, um so viele Menschen wie möglich
                    über OT-Sicherheit aufzuklären und ihnen zu helfen,
                    mögliche Hackerangriffe zu verhindern.
                    Wir glauben, dass Cybersicherheit ein wichtiger Teil
                    unseres Lebens ist und uns helfen kann,
                    unsere persönlichen Daten zu schützen, auch wenn
                    wir nicht in kritischen Bereichen einer Regierung arbeiten.
                </p>


                <div class="text-section-btn-container">
                    <button class="text-section-btn">
                        Los geht's
                    </button>

                    <p class="align-center">
                        <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 29L28 20L16 11V29ZM20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 36C11.18 36 4 28.82 4 20C4 11.18 11.18 4 20 4C28.82 4 36 11.18 36 20C36 28.82 28.82 36 20 36Z" fill="black"/>
                        </svg>
                        <span class="paragraph-inside">
                                Herausfinden, wie es funktioniert?
                            </span>
                    </p>
                </div>

                <div class="project-creator-section ">
                    <p>
                        Erstellt von:
                    </p>

                    <div class="face-images-container">
                        <img class="face-img" src="res/icons/faceFirst.svg" />
                        <img class="face-img" src="res/icons/faceSecond.svg"  />
                        <img class="face-img" src="res/icons/faceThird.svg"  />
                        <img class="face-img" src="res/icons/faceFourth.svg"  />
                    </div>
                </div>

            </div>

        </div>

        <pop-up
                popupTitle="Willkommen"
                popupDescrtiption="Willkomen bei unserer Awareness Schulung. Wir wollen dich mit deinem Namen ansprechene, deswegen bitten wir dich deinen Namen einzugeben und dann kannst du mit unserer Schulung loslegen!"
                gratulation="Wir wünschen dir Viel Erfolg!"
        >
        </pop-up>
    `;
  }
}

customElements.define('onboarding-page', Onboarding);

// declare global {
//   interface HTMLElementTagNameMap {
//     'onboarding-page': Onboarding
//   }
// }
