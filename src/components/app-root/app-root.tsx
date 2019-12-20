import { Component, h, Host, State } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true
})
export class AppRoot {

  @State() lang: string = "fr";

  private navLang() {
    const NAV_LANG = navigator.language.toLowerCase();
    return NAV_LANG === "fr" || NAV_LANG === "fr-fr" ? "fr" : "en";
}

componentWillLoad() {
  this.lang = this.navLang();
}


  render() {
    return (
      <Host>
        <coincoins-header lang={this.lang}></coincoins-header>
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
