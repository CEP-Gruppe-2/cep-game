import { css, html, LitElement } from "lit";
import { customElement, property} from "lit/decorators.js";
import {sicherheitsvorfaelle } from "../../data/modul1/sicherheitsvorfaelle.data";
import "../../component/button";


@customElement('sicherheitsvorfaelle-page')
export class Sicherheitsvorfaelle extends LitElement{
    private bild:String="";
    private buttons:String[]=[];

    static styles = css`
    :host {
        display: block;
        width: 100%;
        height: 100vh;
        background-color: #68C382;  
        position: relative;    
        overflow: hidden;      
    }   

    .svg{
            z-index: 20;
            position: relative;
            display: block;
            width: 70%;
            height: 80%;
            margin: 0 auto;
        }

        .buttons{
            margin-left: 40px;
            margin-top: 20px;
        }

    #ein-button{
        text-align: center;
    }

    #zwei-buttons{ 
            text-align: center;
            z-index: 20;
            position: relative;
            display: block;
            width: 70%;
            height: 80%;
            margin: 0 auto;
        }

    #vier-buttons{
        text-align: center;
    }

    `


    
    @property({type: Number})
    position = 0;


    /*wird bei klick auf bild aufgerufen und zählt position hoch*/
    _handleClickBild():void{
        console.log("Klick")
        
        
        
        
        this.position++;
        this.requestUpdate;
    }

    /* wird bei klick auf button aufgerufen
        e:Event wir benötigt um zu erfahren welcher button gedrückt wird*/
    _handleClickButton(e:Event):void{
        this.buttons.length=0;
        this.position++;
    }

    /*lädt pfad zu bild aus JSON*/
    private ladeBild():void{
        this.bild=sicherheitsvorfaelle.ablauf[this.position].hintergrund;
    }

    /*lädt button texte aus JSON und speichert sie ins "buttons" array wenn der Inhalt nicht leer ist*/
    private ladeButtons():void{
        for(let i:number=0;i<4;i++){
            if(sicherheitsvorfaelle.ablauf[this.position].buttons[i].buttonText!="")
            this.buttons[i]=sicherheitsvorfaelle.ablauf[this.position].buttons[i].buttonText;
            else 
            return;
        }
    }

    /*erstellt img als html  
    return: html mit img
    */
    private schreibeBild():any{
        if(this.buttons.length==0)
        return html`<img class="svg" srcset=${this.bild} @click=${this._handleClickBild} />`
        else
        return html`<img class="svg" srcset=${this.bild} />`
    }

    /*wenn buttons gebraucht werden, erstellt buttons als html 
    return: leeres html oder html mit 1,2,oder 4 Buttons
    */
    private schreibeButtons(): any{
        if(this.buttons.length==1)
            return html`<div id="ein-button">
                <button-component class="buttons" textButton=${""+this.buttons[0]} @click=${this._handleClickButton} >${this.buttons[0]}</button-component>
            </div>`
        else if(this.buttons.length==2){
            return html`<div id="zwei-buttons">
                <button-component class="buttons" textButton=${""+this.buttons[0]} @click=${this._handleClickButton} >${this.buttons[0]}</button-component>
                <button-component class="buttons"  textButton=${""+this.buttons[1]} @click=${this._handleClickButton} >${this.buttons[1]}</button-component>
            </div>`
        }
        else if(this.buttons.length==4){
            return html`<div id="vier-buttons">
                <button-component class="buttons" textButton=${""+this.buttons[0]} @click=${this._handleClickButton} >${this.buttons[0]}</button-component>
                <button-component class="buttons" textButton=${""+this.buttons[1]} @click=${this._handleClickButton} >${this.buttons[1]}</button-component>
                <button-component class="buttons" textButton=${""+this.buttons[2]} @click=${this._handleClickButton} >${this.buttons[2]}</button-component>
                <button-component class="buttons" textButton=${""+this.buttons[3]} @click=${this._handleClickButton} >${this.buttons[3]}</button-component>
            </div>`
        }
        else 
            return html``
    }
    


    render() {
        console.log("render")
            this.ladeButtons();
            this.ladeBild();
            
            

            let display=this.schreibeBild();
            let buttons=this.schreibeButtons();
            

        return html`
        ${display}
        ${buttons}
        `
    }


}