import { Component, h, Host, Prop } from '@stencil/core';


@Component({
  tag: 'material-icon',
  styleUrl: 'material-icon.scss',
  shadow: true
})
export class MaterialIcon {

  @Prop({reflect: true}) name: string;

  render() {
    return (
      <Host>
        <i>{this.name}</i>
      </Host>
    );
  }
}