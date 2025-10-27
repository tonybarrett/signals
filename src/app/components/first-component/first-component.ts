import { Component, inject } from '@angular/core';
import { SignalsService } from '../../services/signals.service';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.html',
  styleUrl: './first-component.scss',
})
export class FirstComponent {
  private readonly signalsService = inject(SignalsService);

  public increment(): void {
    this.signalsService.incrementCount();
  }

  public getCount(): number {
    return this.signalsService.getCount();
  }
}
