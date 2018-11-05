import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogOutComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    localStorage.removeItem('auth');
    this.router.navigateByUrl('auth/login');
  }

}
