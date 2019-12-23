import { Component, h, Prop, Event, EventEmitter, State, Watch } from '@stencil/core';


@Component({
  tag: 'lang-switcher',
  styleUrl: 'lang-switcher.scss',
  shadow: true
})
export class LangSwitcher {

  img: HTMLImageElement;

  @Prop() userLang: string;
  @Watch('userLang')
  onUserLangChange(newValue: string) {
    this.toggleLangMenu();
    this.changeLang.emit(newValue);
    this.img.src = `../../assets/img/${newValue}.svg`;
  }

  @State() state: string;

  @Event() changeLang: EventEmitter<string>;

  private toggleLangMenu() {
    this.state === "close" ? this.state = "open" : this.state = "close";
  }

  render() {
    return (
      <div>
        <div onClick={() => this.toggleLangMenu()}>
          <img ref={(e) => this.img = e} alt=""/>
        </div>
        <ul data-state={this.state}>
          {this.userLang !== "fr" && 
          <li onClick={() => this.userLang = "fr"}>
            <img src="../../assets/img/fr.svg" alt="Francais"/>
            <span>Français</span>
          </li>}

          {this.userLang !== "en" && 
          <li onClick={() => this.userLang = "en"}>
            <img src="../../assets/img/en.svg" alt="Francais"/>
            <span>English</span>
          </li>}
        </ul>
      </div>
    );
  }
}