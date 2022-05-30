import { unsafeCSS, html, LitElement } from 'lit';
import styles from './security-incidents.scss?inline';
import {property} from 'lit/decorators.js';
import '../../components/button';
import sicherheitsvorfaelle from '../../data/firstModule/security-incidents.json';


export class SecurityIncidents extends LitElement {

  private bild:String="";
  private buttons:String[]=[];

  static styles = unsafeCSS(styles);


  
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
      this.requestUpdate;
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

customElements.define('security-incidents', SecurityIncidents);

// declare global {
//   interface HTMLElementTagNameMap {
//     'security-incidents': SecurityIncidents
//   }
// }
