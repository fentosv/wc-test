import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class FentosV extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--fentos-v-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }
  __decrement() {
    this.counter -= 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>+1</button>
      <button @click=${this.__decrement}>-1</button>
    `;
  }
}
