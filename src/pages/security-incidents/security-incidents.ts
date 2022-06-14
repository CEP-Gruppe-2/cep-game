import { unsafeCSS, html, LitElement } from 'lit';
import styles from './security-incidents.scss?inline';
import {property} from 'lit/decorators.js';
import '../../components/button';
import sicherheitsvorfaelle from '../../data/firstModule/security-incidents.json';
import { addPointsToLocalStorage } from '../../functions/localstorage';
import { redirectTo } from '../../functions/redirect';


export class SecurityIncidents extends LitElement {

  private bild:string="";
  private text:string="";
  private buttons:String[]=[];
  private antworten:String[]=[];
  private erklärung1:boolean=false;
  private richtigerButton:number=-1
  private punkte:number=0;

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
      e:Event wir benötigt um zu erfahren welcher button gedrückt wird
    */
    _handleClickButton(e:Event):void{
        if(this.buttons[0]=="beenden"){
            addPointsToLocalStorage("Sicherheitsvorfälle", this.punkte+"");
            this.punkte+=Number(localStorage.getItem('points'));
            localStorage.setItem('points', this.punkte+"");
            redirectTo("chapter/1", "")
            return;
        }

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
                if(this.auswahl==this.richtigerButton)
                    this.punkte+=100;
                console.log("treffer: "+i)
                console.log("punkte: "+this.punkte)
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
        this.richtigerButton=+sicherheitsvorfaelle.ablauf[this.position].richtigerButton;
      

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
      if(this.buttons.length==0&&this.text!="Inhalte Folgen...")
      return html`
            <img class="svg" srcset=${this.bild} @click=${this._handleClickBild}/> 
            `
      else if(this.text==""||this.text=="Frage")
      return html`
            <img class="svg" srcset=${this.bild} />
            `
      else 
      return html`
            <h1>${this.text}</h1>
            `
      
  }

  /*wenn buttons gebraucht werden, erstellt buttons als html 
  return: leeres html oder html mit 1,2,oder 4 Buttons
  */
  private schreibeButtons(): any{
      if(this.buttons.length==1){
          return html`<div class="flexbox-buttons">
              <my-button @click=${this._handleClickButton} >${this.buttons[0]}</my-button>
          </div>`
      }
      else if(this.buttons.length==2){
          return html`<div class="flexbox-buttons">
              <my-button @click=${this._handleClickButton} >${this.buttons[0]}</my-button>
              <my-button @click=${this._handleClickButton} >${this.buttons[1]}</my-button>
          </div>`
      }
      else if(this.buttons.length==4){
          return html`<div class="flexbox-buttons">
              <my-button class="vier-button" @click=${this._handleClickButton} >${this.buttons[0]}</my-button>
              <my-button class="vier-button" @click=${this._handleClickButton} >${this.buttons[1]}</my-button>
              <my-button class="vier-button" @click=${this._handleClickButton} >${this.buttons[2]}</my-button>
              <my-button class="vier-button" @click=${this._handleClickButton} >${this.buttons[3]}</my-button>
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
        <div class="main-div">
            ${display}
            ${buttons}
        </div>
      `
  }

}

customElements.define('security-incidents', SecurityIncidents);

// declare global {
//   interface HTMLElementTagNameMap {
//     'security-incidents': SecurityIncidents
//   }
// }
