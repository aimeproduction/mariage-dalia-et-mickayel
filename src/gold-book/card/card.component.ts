import {Component, input} from '@angular/core';
import {MessageDto} from "../../interface/message-dto";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  public messages = input<MessageDto[]>([]);
}
