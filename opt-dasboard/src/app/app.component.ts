import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'opt-dasboard';
  constructor( private auth: AuthService){}
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.auth.localAuthSetup();
  }
}
