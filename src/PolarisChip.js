import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: {type: String},
      active: { type: Boolean, reflect: true }
    };
  }
/*
class differentChips extend LitElement{
  static properties = {link: {
    type: String,
  },

  primaryOutlined: {
    type: Boolean, 
    reflect: true, 
    attribute: "primary-outlined",
  },
  primaryFilled: {
    type: Boolean, 
    reflect: true, 
    attribute: "primary-filled",},

    tinted: {
    type: Boolean, 
    reflect: true, 
    },

    lightOutlined: {
    type: Boolean, 
    reflect: true, 
    attribute: "light-outlined",
  }, 
   lightFilled: {
    type: Boolean, 
    reflect: true, 
    attribute: "light-filled",
  }
}

*/

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin:0 12px 12px 0;
      }
      .link-focus, 
      .link:hover,
      :host([active]) .link { 
        background-color :transparent;
        border: 2px solid #4298db;
        border-radius: 3px;
        color: #005fa9;
        cursor: pointer;
        padding: 0.325rem 1rem;
      }
      .link{ 
        text-transform: uppercase;
        font-style: italic;
        font-weight: 700;
        letter-spacing: .025rem;
        color:#005fa9;
        text-decoration: none;
        display: inline-block;
        margin-top: 20px;
        border: 8px solid #005fa9;
        border-radius: 3px;
      }
      span {
        padding: 8px 4px;
        border: 2px solid #444;
        color: #444;
        font-size: 16px;
      }
    `;
  }

  constructor() {
    super();
    this.name = 'Football';
    this.link = "https://www.psu.edu/news/research";
  }

  render() {
    return html`<a class= "link" href= "${this.link}"><slot>${this.name}</slot></a>`;
  }
}
