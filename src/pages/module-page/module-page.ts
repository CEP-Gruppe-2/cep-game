import { unsafeCSS, html, LitElement } from 'lit';
import { redirectTo } from '../../functions/redirect';
import styles from './module-page.scss?inline';

export class ModulePage extends LitElement {

  static styles = unsafeCSS(styles);

  private chapterNumber : number;

  constructor(){
    super();
    let x : string = window.location.pathname, arr : Array<string> = x.split("/");
    let arrString = arr[1].toString();
    let chapterNum = parseInt(arr[2].toString());
    console.log(`${arrString}`, `${chapterNum}`);
    
    if(arrString != "chapter" || (chapterNum > 3 || chapterNum < 1)){
      console.log(1235);
      
      redirectTo("/404", "");
    }else{
      this.chapterNumber = chapterNum;
    }

  }

  render() {
    return html`
      <div>
        <div>
          <h2>Modul ${this.chapterNumber}: </h2>
          <!--
            schloß geöffnet oder geschlossen
           -->
        </div>

        
      </div>
    `;
  }
}

customElements.define('module-page', ModulePage);

