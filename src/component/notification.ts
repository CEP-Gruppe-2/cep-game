import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { redirectToWithParameter } from '../functions/redirect';

@customElement('notification-component')
export class Notification extends LitElement {

    static styles = css`
        :host{
            display: block;
            position: absolute;
            padding: 0.5em;
            margin: 0;
            border: none;
            background-color: transparent;
            right: 0.5em;
            top: 0.5em;
            overflow: hidden;
            z-index: 50;
        }

        .notification-error, .notification-success{
            padding: 0;
            margin: 0;
            text-align: left;
            width: 100%;
            height: 100%;
        }

        .notification-error{
            background-color: #fbd3cc;
            color: #fff;
        }

        .notification-success{
            background-color: #d5f9dd;
            color: #fff;
        }

        .notification-container{
            display: block;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
        }

        .notification-information{

        }

        .notification-text{
            margin-top: 0;
            margin-left: 0.5em;
            margin-bottom: 0;
            margin-right: 0;
            color: #848484;
        }

        .notification-information{
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .notification-box{
            margin: 0;
            padding: 0.5em 1em;
            display: flex;
            flex-direction: row;
        }

        .close-icon{
            margin-top: 0;
            margin-left: 3em;
            margin-bottom: 0;
            margin-right: 0;
            padding: 0.3em 0.5em;
            border-radius: 0.3em;
        }

        .close-icon:hover{
            background-color: #fff;
        }
    `

    @property({type: String})
    notification = "";

    @property({type: Number})
    ownTimeout = 0;

    private standardTimeout : number = 1000;

    constructor(){
        super();
        if(this.ownTimeout != null || this.ownTimeout != undefined){ this.standardTimeout = this.ownTimeout }
    }

    private _closeNotification(e : Event){
        console.log("Notification wurde geschloßen");
        let event = new CustomEvent("notify", {detail: {
            message: 'Das ist Notification Komponent'
        }});

        this.dispatchEvent(event)
        
    }

    

    public _typeOfNotification(){
        let timer = this.standardTimeout / 1000;
        let countDown = setInterval(() => {

            if (timer < 0) {   
                redirectToWithParameter("/modul", "1", "mod" );
            }

            console.log("ich teste mich aus");
            
            timer--;
        }, 1000)

        if(this.notification == "error"){
            return html `
                <div class="notification-error notification-container">
                    <div class="notification-box">
                        <div class="notification-information">
                            <img src="res/icons/error.svg"/>
                            <p class="notification-text">Ups... Das ist was schief gelaufen.</p>
                        </div>
                        <!-- Close Icon -->
                        <img class="close-icon" src="res/icons/close.svg" @click=${(e : Event) => this._closeNotification(e)}/>
                    </div>
                </div>
            `;
        }else if(this.notification == "success"){
            return html `
                <div class="notification-success notification-container">
                    <div class="notification-box">
                        <div class="notification-information">
                            <img src="res/icons/success.svg"/>
                            <p class="notification-text">Herzlichen Glückwunsch!</p>
                        </div>
                        <!-- Close Icon -->
                        <img class="close-icon" src="res/icons/close.svg" @click=${(e : Event) => this._closeNotification(e)}/>
                    </div>
                </div>
            `;
        }else{
            return ``
        }
    }


    render() {
        
        return html`
            ${this._typeOfNotification()}
        `
    }

}

