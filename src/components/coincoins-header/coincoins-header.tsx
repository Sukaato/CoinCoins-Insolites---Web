import { Component, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'coincoins-header',
  styleUrl: 'coincoins-header.scss',
  shadow: true
})
export class CoincoinsHeader {

  @Prop() userLang: string = "fr";

  menu: HTMLMenuElement;
  nav: HTMLElement;

  private stateMenu() {
    if (this.menu.getAttribute("data-state") === "close") {
      this.menu.setAttribute("data-state", "open");
      this.nav.style.height = `${this.nav.scrollHeight}px`;
    } else {
      this.menu.setAttribute("data-state", "close");
      this.nav.setAttribute("style", "");
    }
  }

  @Listen('resize', {target: 'window'})
  resizeDocument() {
    if (document.body.offsetWidth >= 910) {
      this.menu.setAttribute("data-state", "close");
      this.nav.setAttribute("style", "");
    }
  }

  render() {
    return (
      <header>
        <div class="brand">
          <img src="../../assets/img/icon.svg" alt="CoinCoins Insolites"/>
          <h1>CoinCoins Insolites</h1>
        </div>
        <menu ref={e => this.menu = e} data-state="close">
          <div class="icon menu-buger" onClick={() => this.stateMenu()}>
            <span></span>
          </div>
          <nav ref={e => this.nav = e}>
            <ul>
              <li>
                <a href="#home"> {this.userLang === "fr" ? "accueil" : "home"} </a>
              </li>
              <li>
                <a href="#presentation"> {this.userLang === "fr" ? "présentation" : "presentation"} </a>
              </li>
              <li>
                <a href="#about"> {this.userLang === "fr" ? "qui sommes nous ?" : "about us ?"} </a>
              </li>
              <li>
                <a href="#download"> {this.userLang === "fr" ? "téléchager notre application" : "download our application"} </a>
              </li>
            </ul>
          </nav>
        </menu>
      </header>
    );
  }
}