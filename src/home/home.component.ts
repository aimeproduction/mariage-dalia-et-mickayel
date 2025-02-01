import {Component, HostListener, OnInit, signal} from '@angular/core';
import {DividerModule} from "primeng/divider";
import {CommonModule} from "@angular/common";
import {CarouselModule} from "primeng/carousel";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {CountdownComponent} from "../countdown/countdown.component";
import {TooltipModule} from "primeng/tooltip";
import {Button} from "primeng/button";
import {Router} from "@angular/router";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DividerModule, CarouselModule, OverlayPanelModule, CountdownComponent, TooltipModule, Button],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public listImages: string[] = [
    'assets/images/img2.png',
    'assets/images/img3.png',
    'assets/images/img4.png',
    'assets/images/img5.jpg',
    'assets/images/img6.png',
    'assets/images/img7.png',
    'assets/images/img8.png',
  ];
  boxStyle = signal({ width: '30vw', height: '50px' });

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = window.innerWidth;

    if (width <= 767) {
      this.boxStyle.set({ width: '75vw', height: '50px' });

    }

    if (width >= 768 && width <=1024) {
      this.boxStyle.set({ width: '50vw', height: '50px' });

    }
  }


  public responsiveOptions: any[] | undefined;

constructor(private router: Router) {
}

  public ngOnInit(): void {
    this.onResize(new Event('resize'));
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  public navigateToGolMessage(): void {
    this.router.navigate(['mariage-dalia-et-mickayel-laisser-un-message']);
  }

}
