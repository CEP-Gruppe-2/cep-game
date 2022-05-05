import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import '../components/header/index'
import '../components/speech/index'

@customElement('onboarding-page')
export class Onboarding extends LitElement {

    static styles = css`
        :host{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
        }

        .onboarding-images-section{
            background: rgb(255,255,255);
            background: linear-gradient(355deg, rgba(255,255,255,1) 0%, rgba(104,195,130,1) 79%);
            height: 100vh;
            width: 100vw;
        }

        .onboarding-text-section{
            height: 100vh;
            width: 100vw;
        }

        .flex-half{
            flex: 0 0 50%;
        }

        .text-section{
            text-align: left;
            padding: 0 1em;
            text-decoration: none;
            
        }

        .bold{
            font-style: bold;
        }

        .thin{
            font-weight: 400;
        }

        .text-section-title{
            font-size: 2em;
            padding: 0;
            margin: 1em 0 0 0;
        }

        .text-section-paragraph{
            color: #787878;
            padding: 0;
            margin: 0.5em 0 0 0;
        }

        .text-section-btn-container{
            padding: 0;
            margin: 1em 0 0 0;
        }

        .text-section-btn{
            padding: 0.75em 2em;
            border-radius: 10px;
            color: #fff;
            background-color: #68C382;
            border: 0 solid #fff;
        }

        .text-section-btn-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .align-center{
            display: flex;
            align-items: center;
            margin-left: 0.5em;
        }

        .paragraph-inside{
            padding: 0;
            margin: 0 0 0 0.5em;
        }

        .project-creator-section{
            margin: 4em 0 0 0;
        }

        .face-images-container, .project-creator-section{
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
        }

        .face-img{
            height: 40px;
            max-height: 40px;
            width: 40px;
            max-width: 40px;
        }
    `

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
                            <img class="face-img" src="src/icons/faceFirst.svg" />
                            <img class="face-img" src="src/icons/faceSecond.svg"  />
                            <img class="face-img" src="src/icons/faceThird.svg"  />
                            <img class="face-img" src="src/icons/faceFourth.svg"  />
                        </div>
                    </div>

                </div>

            </div>
        
            <popup-window
                popupTitle="Willkommen"
                popupDescrtiption="Willkomen bei unserer Awareness Schulung. Wir wollen dich mit deinem Namen ansprechene, deswegen bitten wir dich deinen Namen einzugeben und dann kannst du mit unserer Schulung loslegen!"
                gratulation="Wir wünschen dir Viel Erfolg!"
            >

            </popup-window>

        `
    }

}

customElements.define('onboarding-page', Onboarding)