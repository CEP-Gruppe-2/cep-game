import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { passwortsicherheit } from "../../data/modul1/passwortsicherheit";
import '../../components/button/index';

@customElement('passwortsicherheit-page')
export class Passwortsicherheit extends LitElement{
    private position:number=2;
    private backgroundcolor:String='';
    private joules:String='';
    private alt:String='';
    private start:boolean=false;

    static styles = css`
    :host{
        position: absolute;
            display: block;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            box-sizing: border-box;
    }
    `
    
    _handleClick(e:Event):void{
        this.position++;
        console.log("Position: "+this.position);

        if((e.target as HTMLDivElement).textContent=="Los geht's!"){
            this.position=0;
            this.start=true;
        }
    }

    render() {
        let displayPosition;
        console.log("hier");
       
        /*if(this.maxLaenge==this.position){
            console.log("Done");
            return;
        }*/

        /*einführung aus Json holen*/
        if(!this.start&&this.position<passwortsicherheit.einfuehrung.length){
            this.backgroundcolor= passwortsicherheit.einfuehrung[this.position].backgroundcolor;
            this.joules=passwortsicherheit.einfuehrung[this.position].joules;
            this.alt=passwortsicherheit.einfuehrung[this.position].text;
            console.log(this.joules);
        if(this.position==2){
            displayPosition=html`
            <img position: "absolute" width="2000" height="700" src=${this.joules}  alt=${this.alt}/>
            <div><button-component  id="starten-button" textButton="Los geht's!" @click="${this._handleClick}">Los geht's!</button-component></div>
            `
        }else{
            displayPosition = html `
            <img position: "absolute" width="2000" height="700" src=${this.joules} @click="${this._handleClick}" alt=${this.alt}/>
            `
        }

        /*nach start geht es hier weiter*/
        }else if(this.position<=passwortsicherheit.aufgabe.length){

        }

        this.position++;
        return html`
        ${displayPosition}
        `
        }
}