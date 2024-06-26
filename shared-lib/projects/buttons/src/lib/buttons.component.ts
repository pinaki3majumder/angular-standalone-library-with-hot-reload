import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-buttons',
  standalone: true,
  imports: [],
  template: `
    <!-- HTML !-->
    <button class="fancy_button" role="button">{{btnTxt}}</button>
  `,
  styles: `
    /* CSS */
    .fancy_button {
      align-items: center;
      background-color: #fee6e3;
      border: 2px solid #111;
      border-radius: 8px;
      box-sizing: border-box;
      color: #111;
      cursor: pointer;
      display: flex;
      font-family: Inter,sans-serif;
      font-size: 16px;
      height: 48px;
      justify-content: center;
      line-height: 24px;
      max-width: 100%;
      padding: 0 25px;
      position: relative;
      text-align: center;
      text-decoration: none;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }
    
    .fancy_button:after {
      background-color: #111;
      border-radius: 8px;
      content: "";
      display: block;
      height: 48px;
      left: 0;
      width: 100%;
      position: absolute;
      top: -2px;
      transform: translate(8px, 8px);
      transition: transform .2s ease-out;
      z-index: -1;
    }
    
    .fancy_button:hover:after {
      transform: translate(0, 0);
    }
    
    .fancy_button:active {
      background-color: #ffdeda;
      outline: 0;
    }
    
    .fancy_button:hover {
      outline: 0;
    }
    
    @media (min-width: 768px) {
      .fancy_button {
        padding: 0 40px;
      }
    }
  `
})
export class ButtonsComponent {
  @Input() btnTxt?: string;
}
