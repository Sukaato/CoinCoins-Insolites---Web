import { Component, h, Watch, Prop, Event, EventEmitter } from '@stencil/core';
import { set } from 'cookies-manager';


@Component({
  tag: 'lang-switcher',
  styleUrl: 'lang-switcher.scss',
  shadow: true
})
export class LangSwitcher {

  img: HTMLImageElement;
  langMenu: HTMLUListElement;

  @Prop() userLang: string;
  @Watch('userLang')
  whenLangChange(newValue: string) {
    this.img.src = `../../assets/img/${newValue}.svg`;
    this.toggleLangMenu();
  }

  @Event() changeLang: EventEmitter<string>;

  componentDidRender() {
    this.setLang(this.userLang);
    this.langMenu.setAttribute("data-state", "close")
  }

  private toggleLangMenu() {
    this.langMenu.getAttribute("data-state") === "close" 
      ? this.langMenu.setAttribute("data-state", "open")
      : this.langMenu.setAttribute("data-state", "close");
  }

  private setLang(userLang: string) {
    this.userLang = userLang;
    this.setCookie(userLang);
    this.changeLang.emit(userLang);
  }

  private setCookie(userLang: string) {
    set({key: "userLang", value: userLang, expire: 31, path: '/'});
  }

  render() {
    return (
      <div>
        <img ref={(e) => this.img = e} onClick={() => this.toggleLangMenu()} alt=""/>
        <ul ref={(e) => this.langMenu = e}>
          <li onClick={() => this.setLang("fr")}>
            <img src="../../assets/img/fr.svg" alt="Francais"/>
            <span>Francais</span>
          </li>
          <li onClick={() => this.setLang("en")}>
            <img src="../../assets/img/en.svg" alt="English"/>
            <span>English</span>
          </li>
        </ul>
      </div>
    );
  }
}