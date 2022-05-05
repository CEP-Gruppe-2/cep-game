import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import '../components/circle/index'
import '../data/introduction'
import { intro } from '../data/introduction'

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
            z-index: 200;
        }

        .close-container button{
           padding: 0;
           margin: 0;
           border: none;
           background-color: transparent;
           cursor: pointer;
           z-index: 20;
        }

        .introduction-container{
            width: 100%;
            height: 100%;
            background-color: transparent;
            padding: 0;
            margin: 0;
            position: relative;
        }

        .welcome-section{
            position: absolute;
            display: block;
            z-index: 10;
            width: 100%;
            height: auto;
            top: 8%;
            text-align: left;
        }

        .welcome-text{
            padding: 0 1em;
        }

        .welcome-title{
            color: #fff;
            line-height: 1em;
            text-align: left;
            font-size: 32px;
        }


        .welcome-secondary-title{
            color: #fff;
            line-height: 1.25em;
            text-align: left;
            font-size: 20px;
        }

        .welcome-btn, .email-btn{
            display: block;
            width: 50%;
            margin: 1em auto;
            padding: 1em 1em;
            background-color: #FFD037;
            color: #fff;
            border: none;
        }

        .welcome-btn:hover, .email-btn:hover{
            color: #FFD037;
            background-color: #fff;
        }

        @media only screen and (min-width: 600px) {
            .welcome-section{
                max-width: 660px;
                margin: 0 auto;
                left: 0;
                right: 0;
            }
        }

        @media only screen and (min-width: 768px) {
            .welcome-section{
                max-width: 768px;
                margin: 0 auto;
                left: 0;
                right: 0;
            }

            .welcome-title{
                color: #fff;
                line-height: 1em;
                text-align: left;
                font-size: 40px;
            }

            .welcome-secondary-title{
                color: #fff;
                line-height: 1.25em;
                text-align: left;
                font-size: 28px;
            } 

        }

        @media only screen and (min-width: 968px) {
            .welcome-section{
                max-width: 968px;
                margin: 0 auto;
                left: 0;
                right: 0;
            }

            .welcome-title{
                color: #fff;
                line-height: 1em;
                text-align: left;
                font-size: 56px;
            }

            .welcome-secondary-title{
                color: #fff;
                line-height: 1.25em;
                text-align: left;
                font-size: 32px;
            }   

            .welcome-btn, .email-btn{
                width: 200px;
            }
        }

        .roboter-img{
            width: 500px;
            height: 500px;
            position: absolute;
        }


        .align-right{
            bottom: 20px;
            right: 30px;
        }

        .align-left{
            bottom: 20px;
            left: 30px;
        }

        @media only screen and (max-width: 640px) {
            .roboter-img{
                width: 100%;
                height: 320px;
            }

            .align-right{
                top: 20%;
                right: 0;
            }

            .align-left{
                top: 10%;
                left: 0;
            }
        }

        .city-img{
            height: auto;
            width: 500px;
            position: absolute;
            z-index: 100;
            bottom: 0;
            right: -20px;
        }

        @media only screen and (max-width: 762px){
            .city-img{
                width: 450px;
            }

            .cloud-img{
                width: 160px;
            }
        }

        @media only screen and (max-width: 640px){
            .city-img{
                width: 100%;
                right: 0 !important;
            }
            

        }

        .cloud-img{
            height: auto;
            width: 200px;
            position: absolute;
            z-index: 100;
            bottom: 240px;
            right: 20px;
        }

        .email-img{
            margin: auto;
            position: absolute;
            width: 500px;
            height: auto;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
        }

        @media only screen and (max-width: 510px){
            .email-img{
                width: 100%;
            }
            
        }

        .rotate-90{
            transform: rotate(180deg);
        }

        .email-btn{
            position: absolute;
            right: 0; left: 0; bottom: 20px;
        }
    `

    @property({type: Number})
    position = 0;

    _handleClick() {
        this.position++;
        console.log("position: " + this.position);
        
    }

    render() {
        let displayPosition;

        if(this.position == 0){
            displayPosition = html `
                <div class="introduction-container">
                <div class="welcome-section">
                    <div class="welcome-text">
                        <h2 class="welcome-title"> 
                            Das Team - SafeWise stellt dir eine unglaubliche Awareness-Schulung vor
                        </h2>

                        <p class="welcome-secondary-title">
                            Es gibt viele interessante Dinge, die auf dich warten, aber wir wollen sie dir nicht verraten. Du musst es mit eigenen Augen erleben und in die Atmosphäre eintauchen.

                            <br>
                            Wenn du bereit für das Abendteuer bist, warte nicht und klicke auf die Schaltfläche unten. Dort wirst du erfahren, was dich erwartet!
                        </p>
                        
                        <button class="welcome-btn" @click="${this._handleClick}">Fortfahren</button>
                    </div>

                    
                </div>
            </div>
            `
        }else {
            const src = intro.roboterImages[this.position - 1].src;
            const alignLeft = intro.roboterImages[this.position - 1].left;
            const alignRight = intro.roboterImages[this.position - 1].right;
            const cityVisible = intro.roboterImages[this.position - 1].cityVisible
            
            if(!alignLeft && alignRight){
                displayPosition = html `<img class="align-right roboter-img" src="${src}" @click="${this._handleClick}"/>`
            }else if(intro.roboterImages[this.position - 1].emailVisible){
                displayPosition = html `<img class="email-img" src="${intro.emailImage}" @click="${this._handleClick}"/>
                                        <button class="email-btn" @click="${this._handleClick}">Schließen</button>
                `
            }else if(this.position == intro.roboterImages.length){
                console.log("lasdasdsa");
                displayPosition = html ` <img class="align-left roboter-img" src="${src}" @click="${this._handleClick}"/>
                                        <img class="city-img rotate-90" src="${intro.cityImage}"/>`
            }else{
                if(cityVisible){
                    displayPosition = html ` <img class="align-left roboter-img" src="${src}" @click="${this._handleClick}"/>
                                             <img class="city-img" src="${intro.cityImage}"/>
                                             <img class="cloud-img" src="${intro.cloudImage}" @click="${this._handleClick}"/>
                                             <img class="cloud-img" style="right: 260px !important; bottom: 180px !important;" src="${intro.cloudImage}" @click="${this._handleClick}"/>
                    `
                }else{
                    displayPosition = html ` <img class="align-left roboter-img" src="${src}" @click="${this._handleClick}"/>`
                }

            }

        }

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
            
            ${displayPosition}
        `
    }

}

customElements.define('introduction-page', Introduction)