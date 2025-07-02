import { Component, AfterViewInit, OnDestroy } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { ThemeSwitch } from "./theme-switch/theme-switch";
import { MiInfo } from "./mi-info/mi-info";
import { ProyectosPersonales } from "./proyectos-personales/proyectos-personales";
import { Tecnologias } from "./tecnologias/tecnologias";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThemeSwitch, MiInfo, ProyectosPersonales, Tecnologias],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, OnDestroy  {
  protected title = 'Portafolio';
  private scrooll: any;

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      this.showScrollbar = this.showScrollbar.bind(this);
      window.addEventListener('mousemove', this.showScrollbar);
      window.addEventListener('scroll', this.showScrollbar);
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('mousemove', this.showScrollbar);
      window.removeEventListener('scroll', this.showScrollbar);
      clearTimeout(this.scrooll);
    }
  }

  showScrollbar() {
    if (typeof document !== 'undefined') {
      document.body.classList.add('show-scrollbar');
      clearTimeout(this.scrooll);
      this.scrooll = setTimeout(() => {
        document.body.classList.remove('show-scrollbar');
      }, 500);
    }
  }
}