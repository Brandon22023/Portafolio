import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-theme-switch',
  imports: [FormsModule],
  templateUrl: './theme-switch.html',
  styleUrl: './theme-switch.css'
})
export class ThemeSwitch {
  modooscuro = true;

  toggleTheme() {
    if(this.modooscuro){
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
    else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode")
    }
  }

}
