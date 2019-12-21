import { Component, h, Host, State } from '@stencil/core';
import { get, set } from 'cookies-manager';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true
})
export class AppRoot {

  @State() lang: string;

  componentDidRender() {
    get("userLang").then((result: {key: string, value: string}) => {
      this.lang = result.value;

    }).catch(() => {
      let navLang = navigator.language.toLowerCase();
      let lang = navLang === "fr" || "fr-fr" ? "fr" : "en";

      this.lang = lang;
      set({key: "userLang", value: lang, expire: 31, path: '/'}).then(() => {
        console.log('ok cookie');
      }).catch(() => {
        console.log('error cookie');
      });
    });
  }

  render() {
    return (
      <Host>
        <coincoins-header userLang={this.lang}>
          <lang-switcher userLang={this.lang} onChangeLang={(e) => this.lang = e.detail} slot="lang-switch"/>
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
