import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import '../components/header'
import '../components/modul/modul-first'
import '../data/moduls'
import { moduls } from '../data/moduls'

@customElement('modul-page')
export class Onboarding extends LitElement {

    static styles = css`
        :host{
        }
    `

    render() {
        return html`
            <header-component></header-component>
            <modul-first 
                moduleTitle=${moduls.module[0].modulTitel} 
                moduleDescription=${moduls.module[0].modulBeschreibung}
                .game=${moduls.module[0].spiele}></modul-first>
        `
    }

}
