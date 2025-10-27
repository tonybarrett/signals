import { Component, inject } from '@angular/core';
import { SignalsService } from '../../services/signals.service';

@Component({
  selector: 'app-second-component',
  imports: [],
  templateUrl: './second-component.html',
  styleUrl: './second-component.scss',
})
export class SecondComponent {
  private readonly signalsService = inject(SignalsService);

  public getCount(): number {
    return this.signalsService.getCounter();
  }

  public onDecrement(): void {
    return this.signalsService.decrementCount();
  }
}
