import { Component, h, Host, State, Listen } from '@stencil/core';
import { get, set } from 'cookies-manager';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true
})
export class AppRoot {

  @State() userLang: string;

  @Listen('changeLang')
  onChangeLang(userLang: CustomEvent) {
    this.userLang = userLang.detail;
    this.setCookie(userLang.detail);
  }

  private setCookie(userLang: string) {
    if (userLang) set({key: "userLang", value: userLang, expire: 31, path: '/'});
  }

  componentDidRender() {
    get("userLang").then((result: {key: string, value: string}) => {
      this.userLang = result.value;

    }).catch(() => {
      let navLang = navigator.language.toLowerCase();
      let userLang = navLang === "fr" || "fr-fr" ? "fr" : "en";

      this.userLang = userLang;
      this.setCookie(userLang);
    });
  }

  render() {
    return (
      <Host>
        <coincoins-header userLang={this.userLang}>
          <lang-switcher userLang={this.userLang} slot="lang-switch"/>
        </coincoins-header>
        <p>Je suis un text de test</p>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='coincoins' exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </Host>
    );
  }
}
