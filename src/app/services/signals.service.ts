import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalsService {
  public count: WritableSignal<number> = signal<number>(1);

  public setCount(number: number) {
    this.count.set(number);
  }

  public getCounter(): number {
    return this.count();
  }

  public incrementCount(): void {
    this.count.update((value) => value + 1);
  }

  public decrementCount(): void {
    this.count.update((value) => value - 1);
  }
}
