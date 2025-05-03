import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../componentes/navbar/navbar.component';



@Component({

  // selector: 'app-root',
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,NavbarComponent  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})


export class AppComponent {
  title = 'serviceangular';
  toggleTheme(): void {
    const body = document.querySelector('body');
    const icon = document.querySelector('#dl-icon');
    const temaActual = body?.getAttribute('data-bs-theme');

    if (temaActual === 'light') {
      body?.setAttribute('data-bs-theme', 'dark');
      icon?.setAttribute('class', 'bi bi-sun-fill');
    } else {
      body?.setAttribute('data-bs-theme', 'light');
      icon?.setAttribute('class', 'bi bi-moon-fill');
    }
  }
}
