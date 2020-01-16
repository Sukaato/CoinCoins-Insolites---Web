import { Component, h, Host } from '@stencil/core';


@Component({
  tag: 'material-icon',
  styleUrl: 'material-icon.scss',
  shadow: true
})
export class MaterialIcon {

  render() {
    return (
      <Host>
        <i>
          <slot />
        </i>
      </Host>
    );
  }
}