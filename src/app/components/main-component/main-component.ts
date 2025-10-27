import { Component } from '@angular/core';
import { FirstComponent } from '../first-component/first-component';
import { SecondComponent } from '../second-component/second-component';

const myComponents = [FirstComponent, SecondComponent];

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [myComponents],
  templateUrl: './main-component.html',
  styleUrl: './main-component.scss',
})
export class MainComponent {}
