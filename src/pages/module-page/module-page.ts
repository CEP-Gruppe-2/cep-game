import { unsafeCSS, html, LitElement } from 'lit';
import { redirectTo } from '../../functions/redirect';
import styles from './module-page.scss?inline';
import  games  from '../../data/moduls.json';

export class ModulePage extends LitElement {

  static styles = unsafeCSS(styles);

  private chapterNumber! : number;

  constructor(){
    super();
    let x : string = window.location.pathname, arr : Array<string> = x.split('/');
    let arrString = arr[1].toString(), 
      chapterNum = parseInt(arr[2].toString());
        
    if(arrString != 'chapter' || (chapterNum > 3 || chapterNum < 1)){
      redirectTo('/404', '');
    }else{
      this.chapterNumber = chapterNum;
    }

  }

  private disableButton(e : Event, completed : boolean) : void {
    if(!completed){
      e.preventDefault();
    }
  }

  render() {
    return html`
      <div class="module-info">
        <div class="module-box">
            <h2 class="module-title">
              <span class="bold-title">Modul ${this.chapterNumber}: </span> ${games.module[this.chapterNumber - 1].title}
            </h2>
            <!-- Beschreibung des Modules -->
            <p class="module-description">${games.module[this.chapterNumber - 1].description}</p>
        </div>

        <div class="module-btns">
          <a class="module-btn" href="${games.module[this.chapterNumber - 1].downloadLink}">Download PDF</a>
          <a class="module-btn" href="${games.module[this.chapterNumber - 1].firstGame}">Los geht's</a>
        </div>
      </div>

      <div class="module-themes">
        <h3 class="themes-title">Themenübersicht</h3>
        
        <div class="themes-boxes" >
          ${games.module[this.chapterNumber - 1].games.map((val, index, arr) =>{
            return html`
              <div class="themes-box div${index}">
                <div class="themes-box-card">
                  <h3 class="themes-box-title">${arr[index].title}</h3>
                  ${ val.completed ?
                    html `
                      <img class="key-img" src="${games.completed}" />
                    ` :
                    html `
                      <img class="key-img" src="${games.uncompleted}" />
                    `
                  }
                </div>
                <p class="themes-desc">${arr[index].description}</p>
                ${
                  val.completed ?
                  html `
                    <a class="themes-btn" href="${arr[index].link}" @click="${(e : Event) => this.disableButton(e, val.completed)}">zum Spiel</a>
                  ` :
                  html `
                    <a class="themes-btn" disabled href="${arr[index].link}" @click="${(e : Event) => this.disableButton(e, val.completed)}">zum Spiel</a>
                  `
                }
                ${console.log(`${arr[index].link}`, `${arr[index].description}`, `${arr[index].title}`)}
              </div>`;
          })}
        </div> 
      </div>
    `;
  }
}

customElements.define('module-page', ModulePage);

