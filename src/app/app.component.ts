import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto_4';
constructor(){
console.log('nuevas funciones');
console.warn("cuidado");
console.log("prueba de conflicto")
}
  }

