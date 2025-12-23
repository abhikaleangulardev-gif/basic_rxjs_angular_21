import { Component, signal } from '@angular/core';
import { Forksjoin } from "./component/forksjoin/forksjoin";

@Component({
  selector: 'app-root',
  imports: [ Forksjoin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('basicRxjs');
}
