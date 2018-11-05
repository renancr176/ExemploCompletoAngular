import {Component, OnInit, HostListener, enableProdMode} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { Environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  public environment: Environment;

  constructor(private router: Router) {
    this.environment = new Environment();
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    if(this.environment.production){
      localStorage.removeItem('auth');
    }
  }
}
