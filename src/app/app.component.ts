import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sidharth Mahai - Portfolio';

  openGitHub() {
    window.open("https://github.com/SidharthMahai/");
  }

  
  openFacebook() {
    window.open("https://www.facebook.com/sidharth.sharma.52035/");
  }

  
  openLinkedIn() {
    window.open("https://www.linkedin.com/in/sidharth-mahai-52a805173/");
  }

}
