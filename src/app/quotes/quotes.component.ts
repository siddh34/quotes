import { Component } from '@angular/core';
import { ButtonComponent } from "../shared/button/button.component";

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent {
  quote = "You must be change you want to see in the world";
}
