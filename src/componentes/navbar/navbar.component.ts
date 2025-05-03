import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
RouterLinkActive;

import { CommonModule } from '@angular/common';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',

  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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
