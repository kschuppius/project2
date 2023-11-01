import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static  properties() {
    return {
      name: { type: String },
      link: { type: String },
      class: {type: String},
      hover: {type: Boolean, reflect: true },
      primaryOutlined: {
        type: Boolean,
        reflect: true,
        attribute: "primary-outlined",
      },
      primaryFilled: {
        type: Boolean,
        reflect: true,
        attribute: "primary-filled",
      },
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
      },
    };
  }
  static get styles() {
    return css`
    :host {
      display: flex;
      margin: 0 12px 12px 0;
      margin-top: 35px;
      padding-left: 9px;
      
    }

    .link-focus, 
    .link:hover,
    :host([active]) .link { 
      background-color :transparent;
      border: 2px solid #4298db;
      border-radius: 3px;
      color: #005fa9;
      cursor: pointer;
    }

    .wrapper {
      padding: 18px 9px;
      border: 2px solid;
      border-radius: 3px;
    color: #00ff51;
  }
      .link{
        font-weight: bold;
        text-decoration: none;
        padding: 8px 4px;
        border: 2px solid;
        border-radius: 3px;
        font-size: 28px;
      }

      .link,
      :host([tinted]) .link:hover{
        background-color : #cce9ff;
        border: 2px solid #e4e5ef;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
      }

      .link,
      :host([light-outlined]) .link:hover{
        background-color : #cce9ff;
        border: 2px solid #e4e5ef;
        border-radius: 2px;
        color: #001e44;
        cursor: pointer;
      }

      .link,
      :host([light-filled]) .link:hover{
        background-color : #001e44;
        border: 2px solid #e4e5ef;
        border-radius: 2px;
        color: #cce9ff;
        cursor: pointer;
      }

      .link,
      :host([primary-outlined]) .link:hover{
        background-color : #e4e5e7;
        border: 2px solid #e4e5ef;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
      }

      .link,
      :host([primary-filled]) .link:hover{
        background-color : #e4e5e7;
        border: 2px solid #005fa9;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
      }


.link:focus {
        background-color: #45637c;
        border: 2px solid #45637c;
        border-radius: 3px;
        color: #cce9ff;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
      }

      .link,
      :host([tinted]) .link
       {
        background-color: #45627c ; 
        border: 2px solid #45637c;
        border-radius: 3px;
        color: #cce9ff;
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
      }

      .link,
      :host([light-outlined]) .link {
        background-color: #001e44;
        border: 2px solid #eff0ff;
        border-radius: 3px;
        color: #cce9ff;
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
      }

      .link,
      :host([light-filled]) .link {
        background-color: #cce9ff;
        border: 2px solid #cce9ff;
        border-radius: 3px;
        color: #001e44;
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
      }

      .link,
      :host([primary-outlined]) .link{ 
        background-color: transparent;
        border: 2px solid #005fa9;
        border-radius: 3px;
        color: #005fa9;
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
      }
      
      :host([primary-outlined]:hover) .link {
  background-color: #005fa9;
  border: 2px solid #005fa9;
  border-radius: 3px;
  color: #e5e9ec;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  
      }
      :host([primary-outlined]:focus) .link {
  background-color: #063d4e;
  border: 2px solid #063d4e;
  border-radius: 3px;
  color: #e5e9ec;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;}


      .link,
      :host([primary-filled]) .link{
        background-color: #005fa9;
        border: 2px solid #005fa9;
        border-radius: 3px;
        color: #ededed;
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
      }
      

      span {
        padding: 8px 4px;
        border: 2px solid #3681bb;
        border-radius: 5px;
        color: #fff;
        font-size: 20px;
      }
    `;
  }

  constructor() {
    super();
    this.name = 'Football';
    this.link = 'https://www.psu.edu/news/research';
    this.class = '';
  }

  render() {
    return html`<a class="link" href="${this.link}"><slot>${this.name}</slot></a>`;
  }
}

/** 
 .link:hover{
        background-color : #e4e5e7;
        border: 2px solid #e4e5ef;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;   // i dont think i need this attribute 
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
      .primaryOutlined {
        border: 2px solid #005fa9;
        background-color: #fff;
        color: #005fa9;
        padding: 12px 16px 12px 24px;
        border-radius: 4px;
        text-decoration: none;
      }
**/