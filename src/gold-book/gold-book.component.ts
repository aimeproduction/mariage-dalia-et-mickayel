import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {CardComponent} from "./card/card.component";
import {MyMessageService} from "../service/myMessage.service";
import {MessageDto} from "../interface/message-dto";
import {Router} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-gold-book',
  standalone: true,
  imports: [
    CardComponent, HttpClientModule
  ],
  templateUrl: './gold-book.component.html',
  styleUrl: './gold-book.component.css',
  providers: [MyMessageService]
})
export class GoldBookComponent implements OnInit {
messages: MessageDto[] = [];
private destroyRef = inject(DestroyRef)

  constructor(private myMessageService: MyMessageService, private router: Router,) {

  }

  public ngOnInit() {
    this.myMessageService.getMessage().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (messages) => {
        this.messages = messages;

      },
      error: () => {
        this.router.navigate(['une-erreur-est-survenue']);
      },
    });
  }
}
