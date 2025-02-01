import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
    imports: [
        Button
    ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

  constructor(private router: Router) {

  }

  navigateToHome(){
    this.router.navigate(['mariage-dalia-et-mickayel']);
  }
}
