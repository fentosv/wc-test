import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { FentosV } from '../src/counter/FentosV.js';
import '../src/counter/fentos-v.js';

describe('FentosV', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<FentosV>(html`<fentos-v></fentos-v>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<FentosV>(html`<fentos-v></fentos-v>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<FentosV>(
      html`<fentos-v title="attribute title"></fentos-v>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<FentosV>(html`<fentos-v></fentos-v>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
