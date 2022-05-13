import { CtLit, html, property, customElement, css } from '@conectate/ct-lit';
import { einleitung } from '../../../data/einleitung.data';


@customElement('app-einleitung')
export class AppEinleitung extends CtLit {

    private schwachstellen : Boolean;
    private hacker : Boolean;
    
    private roboterArray : Object;
    private schwachstellenArray : Object;
    private hackerArray : Object;

    private positionArray : number;

    constructor(){
        super();
        this.schwachstellen = false;
        this.hacker = false;

        this.roboterArray = einleitung.roboterImages;
        this.positionArray = 0;
    }

    static styles = css`
        :host {
            display: block;
            width: 100%;
            height: 100vh;
            background-color: #68C382;  
            position: relative;    
            overflow: hidden;      
        }

        .circle-icon{
            display: block;
            position: absolute;
            z-index: 10;
        }

        .float-left-top{
            left: -250px;
            top: -250px;
        }

        .float-right-bottom{
            bottom: -250px;
            right: -250px;
        }


        .roboter-img, .city-img{
            z-index: 20;
            position: relative;
            display: block;
            width: 100%;
            height: 80%;
            margin: 0 auto;
        }

        .city-img{
            margin: 1em auto;
        }

        @media only screen and (min-width: 540px) {
            .roboter-img{
                width: 80%;
            }   
        }

        @media only screen and (min-width: 768px) {
            .roboter-img{
                width: 570px;
            }   
        }

        @media only screen and (min-width: 1100px) {
            .roboter-img{
                width: 670px;
                height: 90%;
            }   
        }

        .city-container, .email-container{
            z-index: 20;
            display: block; 
            position: relative;
            height: 50%;
            top: 10%;
        }

        .email-container{
            width: 90%;
            margin: 0 auto;
        }

        .email-img{
            z-index: 20;
            position: relative;
            display: block;
            width: 100%;
            height: 80%;
            margin: 0 auto;
        }

        @media only screen and (min-width: 768px) {
            .email-container{
                width: 500px;
            }
        }

        .cloud-img{
            width: 40%;
            display: block;
            position: absolute;
            z-index: 30;
            top: -30px;
        }

        @media only screen and (min-width: 768px) {
            .cloud-img{
                width: 260px;
            }
        }

        .cloud-right{
            float: right;
            right: 30px;
            top: 20px;
        }

        .cloud-left{
            
        }
    `;

    _displayEinleitung(){
        if(!this.roboterArray[this.positionArray].roboterVisible && this.roboterArray[this.positionArray].cityVisible){
            return html `
                <div class="city-container">
                    <img class="cloud-img cloud-right" @click="${this._count}" src="${einleitung.cloudImage}"/>
                    <img class="cloud-img" @click="${this._count}" src="${einleitung.cloudImage}"/>
                    <img class="city-img" @click="${this._count}" src="${einleitung.cityImage}"/>
                </div>
            `
        }else if(this.roboterArray[this.positionArray].emailVisible){
            return html `
                <div class="email-container">
                    <img class="email-img" @click="${this._count}" src="${einleitung.emailImage}"/>

                </div>
            `
        }else{
            return html `<img class="roboter-img" @click="${this._count}" src="${this.roboterArray[this.positionArray].src}"/>`
        }

    }

    async _count(){
        this.positionArray = this.positionArray + 1;

        console.log(this.positionArray);

        this.update();
    }


    render() {
        return html`
            <svg class="float-left-top circle-icon" width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle id="circle-svg" cx="250" cy="250" r="250" fill="#61AF77"/>
            </svg>

            <svg class="float-right-bottom circle-icon" width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle id="circle-svg" cx="250" cy="250" r="250" fill="#61AF77"/>
            </svg>

            ${this._displayEinleitung()}

        `;
    }
}