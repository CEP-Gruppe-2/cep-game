import { CtLit, html, property, customElement, css } from '@conectate/ct-lit';
import { einleitung } from '../../../data/einleitung.data';
import { setCookieIfNotExist } from '../../../functions/cookies';
import { AppRouter } from '../../base/app-router';
import  '../../../component/notification';
import { redirectToWithParameter } from '../../../functions/redirect';


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
        this.schwachstellenArray = einleitung.schwachstellenBeheben;
        console.log(einleitung.schwachstellenBeheben);
        console.log(this.schwachstellenArray);
        
        this.hackerArray = einleitung.hackerVerfolgen
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
        
        .email-btn, .last-btn{
            margin: 1em auto;   
            display: block;
            background-color: #FFD037;
            color: #fff;
            width: 100px;
            padding: 0.75em 1em;
            border: none;
            border-radius: 1em;
        }

        .last-btn{
            display: inline-block;
            width: auto;
        }

        .last-container{
            display: block;
            margin: auto;
            white-space: nowrap;
            text-align: center;
        }
    `;

    _displayEinleitung(){
        console.log(this.schwachstellenArray[this.positionArray]);
        

        if(!this.roboterArray[this.positionArray].roboterVisible && this.roboterArray[this.positionArray].cityVisible){
            return html `
                <div class="city-container">
                    <img class="cloud-img cloud-right" @click="${this._count}" src="${einleitung.cloudImage}"/>
                    <img class="cloud-img" @click="${this._count}" src="${einleitung.cloudImage}"/>
                    <img class="city-img"  @click="${this._count}" src="${einleitung.cityImage}"/>
                </div>
            `
        }else if(this.roboterArray[this.positionArray].emailVisible){
            return html `
                <div class="email-container">
                    <img class="email-img" @click="${this._count}" src="${einleitung.emailImage}"/>
                    <button class="email-btn" @click="${this._count}">Schließen</button>
                </div>
            `
        }else if(einleitung.roboterImages.length - 1 == this.positionArray){
            return html `
                    <img class="roboter-img" src="${this.roboterArray[this.positionArray].src}"/>
                    <div class="last-container">
                        <button class="last-btn" name="hacker" @click="${this._count}">Hacker verfolgen</button>
                        <button class="last-btn" name="anlage" @click="${this._count}">Anlage reparieren</button>
                    </div>
            `
        }else if(this.schwachstellen || this.hacker){
            
            if(this.schwachstellenArray.length - 1 == this.positionArray || this.hackerArray.length - 1 == this.positionArray){
                
                if(setCookieIfNotExist(true, {name: 'einleitungClosed', value: true})){

                    console.log(`der Nutzer hat die Einleitung erfolgreich abgeschlossen. Wir können den Nutzer zum ersten Kapitel weiterleiten wir können ihm Punkte addieren`);

                    if(this.schwachstellen){
                        return html `
                            <notification-component notification="success" @notify=${(e : Event) => this.hello(e)}></notification-component>
                            <img class="roboter-img" src="${this.schwachstellenArray[this.positionArray]}"/>
                        `; 
                    }else{
                        return html `
                            <notification-component notification="success" @notify=${(e : Event) => this.hello(e)}></notification-component>
                            <img class="roboter-img" @click="${this._count}" src="${this.hackerArray[this.positionArray]}"/>
                        `;
                    }
                }else{

                    console.log(`der Nutzer hat die Einleitung bereits abgeschlossen. Wir können den Nutzer zum ersten Kapitel weiterleiten wir können ihm keine Punkte addieren`);

                    if(this.schwachstellen){
                        return html `
                            <notification-component notification="error" @notify=${(e : Event) => this.nextKapitel(e)}></notification-component>
                            <img class="roboter-img" src="${this.schwachstellenArray[this.positionArray]}"/>
                        `; 
                    }else{
                        return html `
                            <notification-component notification="error" @notify=${(e : Event) => this.nextKapitel(e)}></notification-component>
                            <img class="roboter-img" @click="${this._count}" src="${this.hackerArray[this.positionArray]}"/>
                        `;
                    }
                }
            }else{
                if(this.schwachstellen){
                    return html `
                        <img class="roboter-img" @click="${this._count}" src="${this.schwachstellenArray[this.positionArray]}"/>
                    `; 
                }else{
                    return html `
                        <img class="roboter-img" @click="${this._count}" src="${this.hackerArray[this.positionArray]}"/>
                    `;
                }
            }
            
        }else{
            return html `<img class="roboter-img" @click="${this._count}" src="${this.roboterArray[this.positionArray].src}"/>`
        }

    }

    

    async _count(e : Event){

        this.positionArray = this.positionArray + 1;

        if(e.target.name == 'hacker'){
            this.positionArray = 0;
            this.hacker = true;
        }else if(e.target.name == 'anlage'){
            this.schwachstellen = true;
            this.positionArray = 0;
        }

        console.log(`${this.hacker}, ${this.schwachstellen}, ${this.positionArray}`);
        
        this.update();
    }

    private async nextKapitel(e : Event){
        redirectToWithParameter("/modul", "1", "mod" );
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