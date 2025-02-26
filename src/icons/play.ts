import { html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Icon } from './icon';

@customElement('pl-play-icon')
export class Play extends Icon {
  render () {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="currentColor">
        <path d="M320-200v-560l440 280-440 280Z"/>
      </svg>
    `;
  }
}
