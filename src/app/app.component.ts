import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'photoExplore';
  darkToggle(){
    const themeBtn = document.querySelector('.theme-btn');
    
      themeBtn?.addEventListener('click', () =>{
      document.body.classList.toggle("dark-theme");
      themeBtn?.querySelector('span.light')?.classList.toggle('active');
      themeBtn?.querySelector('span.dark')?.classList.toggle('active');

    })
  }
}
