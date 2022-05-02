import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import '../components/circle/index'

@customElement('introduction-page')
export class Introduction extends LitElement {

    static styles = css`
        :host{
            position: absolute;
            display: block;
            width: 100vw;
            height: 100vh;
            background-color: #68C382;
            overflow: hidden;
            box-sizing: border-box;
        }

        .circle-container, .close-container{
            width: auto;
            height: auto;
            display: block;
            position: absolute;
            padding: 0;
            margin: 0;
        }

        .top-left-absolute{
            top: -250px;
            left: -250px;
        }

        .bottom-right-absolute{
            bottom: -125px;
            right: -125px;
        }

        .close-position{
            top: 1em;
            right: 1em;
        }

        .close-container button{
           padding: 0;
           margin: 0;
           border: none;
           background-color: transparent;
           cursor: pointer;
        }

    `

    render() {
        return html`
            
            <!--<circle-component ?circlevisible=${true} circleTop=250 circleLeft=-250></circle-component>-->

            <div class="circle-container top-left-absolute">
                <svg width="500" height="500" viewBox="0 0 500 500" fill="none"  xmlns="http://www.w3.org/2000/svg">
                    <circle id="circle-svg" cx="250" cy="250" r="250" fill="#61AF77"/>
                </svg>
            </div>

            <div class="circle-container bottom-right-absolute">
                <svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle id="circle-svg" cx="125" cy="125" r="125" fill="#61AF77"/>
                </svg>
            </div>

            <div class="close-container close-position">
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 2.41714L21.5829 0L12 9.58286L2.41714 0L0 2.41714L9.58286 12L0 21.5829L2.41714 24L12 14.4171L21.5829 24L24 21.5829L14.4171 12L24 2.41714Z" fill="black"/>
                    </svg>
                </button>
            </div>

        `
    }

}

customElements.define('introduction-page', Introduction)