import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  scrollPos = 0;
  menuOpen = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
