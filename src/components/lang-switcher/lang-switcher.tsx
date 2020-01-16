import { Component, Event, EventEmitter, h, Prop, Watch } from '@stencil/core';


@Component({
  tag: 'lang-switcher',
  styleUrl: 'lang-switcher.scss',
  shadow: true
})
export class LangSwitcher {

  private img: HTMLImageElement;

  @Prop() availbleLang: {lang: string, label: string}[];

  @Prop() userLang: string;
  @Watch('userLang')
  onUserLangChange(newValue: string) {
    this.changeLang.emit(newValue);
    this.img.src = `../../assets/img/${newValue}.svg`;
  }

  @Prop({reflect: true}) state: string = "close";

  @Event() changeLang: EventEmitter<string>;

  private toggleLangMenu() {
    this.state === "close" ? this.state = "open" : this.state = "close";
  }

  private setLang(userLang: string) {
    this.userLang = userLang;
    this.toggleLangMenu();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.toggleLangMenu()}>
          <img ref={(e) => this.img = e} alt=""/>
          <material-icon>keyboard_arrow_down</material-icon>
        </button>
        <ul>
          <li onClick={() => this.setLang("fr")}>
            <img src="../../assets/img/fr.svg" alt="Francais"/>
            <span>Français</span>
          </li>

          <li onClick={() => this.setLang("en")}>
            <img src="../../assets/img/en.svg" alt="Francais"/>
            <span>English</span>
          </li>
        </ul>
      </div>
    );
  }
}