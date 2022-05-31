import { unsafeCSS, html, LitElement } from 'lit';
import styles from './security-incidents.scss?inline';
import {property} from 'lit/decorators.js';
import '../../components/button';
import sicherheitsvorfaelle from '../../data/firstModule/security-incidents.json';


export class SecurityIncidents extends LitElement {

  private bild:string="";
  private text:string="";
  private buttons:String[]=[];
  private antworten:String[]=[];
  private erklärung1:boolean=false;
  private richtigerButton:string="";

  static styles = unsafeCSS(styles);


  
  @property({type: Number})
  position = 0;
  @property({type: Number})
  auswahl = -1;

  /*wird bei klick auf bild aufgerufen und zählt position hoch*/
  _handleClickBild():void{
      console.log("Klick")
      
      
      
      
      this.position++;
      this.requestUpdate;
  }

  /* wird bei klick auf button aufgerufen
      e:Event wir benötigt um zu erfahren welcher button gedrückt wird*/
    _handleClickButton(e:Event):void{
        if(!this.erklärung1){
            this.buttons.length=0;
            this.position++;
         }
        else
        {
            console.log("Schleife")
            schleife:for(var i:number=0;i < this.buttons.length;i++){
            if(this.buttons[i]==(e.target as HTMLDivElement).textContent){
                this.auswahl=i;
                console.log("treffer"+i)
                break schleife;
            }

        }
        console.log("Schleife verlassen")
        
      }
      
      this.requestUpdate;
    }

    private ladeErklärungsDurchlauf():void{
        console.log("Lade erklärung")
        this.bild=sicherheitsvorfaelle.ablauf[this.position].antworten[this.auswahl].hintergrund;
        this.text="";
    }


  /*lädt pfad zu bild aus JSON*/
  private ladeBild():void{
        this.bild=sicherheitsvorfaelle.ablauf[this.position].hintergrund;
        this.text=sicherheitsvorfaelle.ablauf[this.position].text;
        this.richtigerButton=sicherheitsvorfaelle.ablauf[this.position].richtigerButton;
      

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
      else if(this.text==""||this.text=="Frage")
      return html`<img class="svg" srcset=${this.bild} />`
      else 
      return html`<h1>${this.text}</h1>`
      
  }

  /*wenn buttons gebraucht werden, erstellt buttons als html 
  return: leeres html oder html mit 1,2,oder 4 Buttons
  */
  private schreibeButtons(): any{
      if(this.buttons.length==1)
          return html`<div id="ein-button">
              <my-button class="buttons" @click=${this._handleClickButton} >${this.buttons[0]}</my-button>
          </div>`
      else if(this.buttons.length==2){
          return html`<div id="zwei-buttons">
              <my-button class="buttons" @click=${this._handleClickButton} >${this.buttons[0]}</my-button>
              <my-button class="buttons" @click=${this._handleClickButton} >${this.buttons[1]}</my-button>
          </div>`
      }
      else if(this.buttons.length==4){
          return html`<div id="vier-buttons">
              <my-button class="buttons" @click=${this._handleClickButton} >${this.buttons[0]}</my-button>
              <my-button class="buttons" @click=${this._handleClickButton} >${this.buttons[1]}</my-button>
              <my-button class="buttons" @click=${this._handleClickButton} >${this.buttons[2]}</my-button>
              <my-button class="buttons" @click=${this._handleClickButton} >${this.buttons[3]}</my-button>
          </div>`
      }
      else 
          return html``
  }
  


  render() {
      console.log("render")
      if(!this.erklärung1){
          this.ladeButtons();
          this.ladeBild();
      } else {
        console.log("render in erklärung wird geladen")
          this.ladeErklärungsDurchlauf();
          this.erklärung1=false;
          this.buttons=[];
          this.antworten=[];
          this.auswahl=-1;
      }


          if(this.text=="Sicherheitsvorfall: was ist das?"||this.text=="Frage"){
              console.log("Erklärung1=true")
              this.erklärung1=true;
          }
            
          
          console.log("Bilds:" +this.bild)
          let display=this.schreibeBild();
          let buttons=this.schreibeButtons();
          

      return html`
      ${display}
      ${buttons}
      `
  }

}

customElements.define('security-incidents', SecurityIncidents);

// declare global {
//   interface HTMLElementTagNameMap {
//     'security-incidents': SecurityIncidents
//   }
// }
