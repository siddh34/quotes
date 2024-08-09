import { Component } from '@angular/core';
import { ButtonComponent } from "../shared/button/button.component";
import { DisplayComponent } from '../shared/display/display.component';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [ButtonComponent, DisplayComponent],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css',
})
export class QuotesComponent {
  quoteSelected: string = 'This is a quote';

  onQuoteReceived(text: string) {
    this.quoteSelected = text;
  }
}
