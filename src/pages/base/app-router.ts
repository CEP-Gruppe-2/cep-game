import { CtLit, html, customElement, css, query } from '@conectate/ct-lit';
import { Page } from '@conectate/ct-router';
import '@conectate/ct-router';

@customElement('app-router')
export class AppRouter extends CtLit {

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
			path: '/login',
			element: html`<app-login></app-login>`,
			from: () => import('../login/activities/app-login'),
			auth: false,
			title: () => `Login • Example.com`
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
		}
	];

	render() {
		return html` <ct-router id="ctroute" loginFallback="/login" loginFallback="/404" .pages=${AppRouter.pages}> </ct-router>`;
		
	}
}
