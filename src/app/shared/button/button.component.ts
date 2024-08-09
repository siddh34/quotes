import { Component, output } from '@angular/core';
import { environment } from '../../../environments/environment';
import axios from 'axios';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  quoteSelected: string = 'This is a quote';
  quote = output<string>();

  onPress() {
    axios
      .get(`${environment.server}${environment.apiHeader}/quotes/random`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        return response.data;
      })
      .then((data) => {
        this.quoteSelected = data.text;
        this.emitQuote();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  emitQuote() {
    this.quote.emit(this.quoteSelected);
  }
}
