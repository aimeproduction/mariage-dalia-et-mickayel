import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent implements OnInit {
  isMobile = false;
  targetDate = new Date('2025-05-31T15:30:00');
  timeRemaining = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    interval(1000).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.updateCountdown());
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768;
  }
  private updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance > 0) {
      this.timeRemaining = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    } else {
      this.timeRemaining = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
  }
}
