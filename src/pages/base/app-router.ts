import { CtLit, html, customElement, css, query } from '@conectate/ct-lit';
import { Page } from '@conectate/ct-router';
import '@conectate/ct-router';
import "../modul1/sicherheitsvorfaelle-page";

@customElement('app-router')
export class AppRouter extends CtLit {

	@query('#ctrouter') $ctrouter!: HTMLElementTagNameMap['ct-router'];

	static styles = [
		css`
			:host {
				display: block;
			}
		`
	];
	
	static pages: Page[] = [
		{
			path: '/',
			element: html`<home-app></home-app>`,
			from: () => import('../home/activities/home-app'),
			auth: false,
			title: () => `Page 1 • Example.com`
		},
		{
			path: '/404',
			element: html`<app-404></app-404>`,
			from: () => import('./app-404'),
			auth: false,
			title: () => `404 • Example.com`
		},
		{
			path: '/einleitung',
			element: html`<app-einleitung></app-einleitung>`,
			from: () => import('../einleitung/activities/einleitung-app'),
			auth: false,
			title: () => `Einleitung • Example.com`
		},
		{
			path: '/passwortsicherheit',
			element: html`<passwortsicherheit-page></passwortsicherheit-page>`,
			from: () => import('../modul1/passwortsicherheit-page'),
			auth: false,
			title: () => `Passwortsicherheit`
		},
		{
			path: '/sicherheitsvorfaelle',
			element: html`<sicherheitsvorfaelle-page></sicherheitsvorfaelle-page>`,
			from: () => import('../modul1/sicherheitsvorfaelle-page'),
			auth: false,
			title: () => `Sicherheitsvorfälle`
		},
		{
			path: '/modul/:mod',
			element: html`<home-app></home-app>`,
			from: () => import('../home/activities/home-app'),
			auth: false,
			title: () => `Page 1 • Example.com`

		},
		{
			path: '/belohnung',
			element: html`<app-belohnung></app-belohnung>`,
			from: () => import('../belohnung/app-belohnung'),
			auth: false,
			title: () => `Belohnungssystem`

		}
	];

	render() {
		return html`<ct-router id="ctrouter"  .pages=${AppRouter.pages}> </ct-router>`;
	}

	printCurrentState(){
		// More details in interface LocationChanged
		console.log('Current patternMatched',this.$ctrouter.path);
		console.log('Current pathname',this.$ctrouter.pathname);
		console.log('Current queryParams',this.$ctrouter.queryParams);
		console.log('Current params',this.$ctrouter.params);
		console.log('is Logged?',this.$ctrouter.auth);
	  }
	
	  loginNeeded(e : CustomEvent< { path: string } >){
		let path = e.detail.path;
		alert(`loginNeeded on: ${path}`);
	  }
	
	  isLoading(e : CustomEvent< boolean >){
		console.log('loading...', e.detail);
	  }
	
	  pathChanged(e : CustomEvent<LocationChanged>){
		console.log('path changed',location.href);
		console.log('patternMatched',this.$ctrouter.path,'==',e.detail.path);
		console.log('pathname',this.$ctrouter.pathname,'==',e.detail.pathname,'==',location.pathname);
		console.log(this.$ctrouter.queryParams,'==',e.detail.queryParams);
		console.log(this.$ctrouter.params,'==',e.detail.params);
	  }
	
}

interface LocationChanged {
	//patternMatched like a: /:profile/preferences
	path: string,
	// pathname like a: /herberthobregon/preferences
	pathname: string,
	// if path is /home?hello=word then queryParams is { hello : "world" }
	queryParams?: { [x:string] : string },
	// if href is /herberth/preference and path is /:username/preference then params is { username : "herberth" }
	params?: { [x:string] : string }
  }
