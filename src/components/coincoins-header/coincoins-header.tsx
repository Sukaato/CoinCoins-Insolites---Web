import { Component, h, Prop, Listen, State } from '@stencil/core';

@Component({
  tag: 'coincoins-header',
  styleUrl: 'coincoins-header.scss',
  shadow: true
})
export class CoincoinsHeader {

  private nav: HTMLElement;

  @Prop() userLang: string;

  @State() state: string = "close";

  @Listen('resize', {target: 'window'})
  resizeDocument() {
    if (document.body.offsetWidth >= 910) this.closeMenu();
  }

  private stateMenu() {
    if (this.state === "close") {
      this.state = "open";
      this.nav.style.height = `${this.nav.scrollHeight}px`;
    } else {
      this.closeMenu();
    }
  }

  private closeMenu() {
    this.state = "close";
    this.nav.setAttribute("style", "");
  }

  render() {
    return (
      <header>
        <div class="brand">
          <img src="../../assets/img/icon.svg" alt="CoinCoins Insolites"/>
          <h1>CoinCoins Insolites</h1>
        </div>
        <div>
          <menu data-state={this.state}>
            <div class="icon menu-buger" onClick={() => this.stateMenu()}>
              <span></span>
            </div>
            <nav ref={e => this.nav = e}>
              <ul>
                <li>
                  <a href="#home">
                    <span>{this.userLang === "fr" ? "accueil" : "home"}</span>
                  </a>
                </li>
                <li>
                  <a href="#presentation">
                    <span>{this.userLang === "fr" ? "présentation" : "presentation"}</span>
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <span>{this.userLang === "fr" ? "qui sommes nous" : "about us"}</span>
                  </a>
                </li>
                <li>
                  <a href="#download">
                    <span>{this.userLang === "fr" ? "téléchager notre application" : "download our application"}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </menu>
          <slot name="lang-switch"/>
        </div>
      </header>
    );
  }
}