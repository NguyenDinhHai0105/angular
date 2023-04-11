import { Component, OnInit } from '@angular/core';
import { OcsService } from '../ocs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username!: string;
  password!: string;
  message: any;

  constructor(
    private service: OcsService,
    private router: Router
  ) {}

  ngOnInit(): void {    
  }

  doLogin() {
    console.log(this.username + this.password);
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      this.message = data;
      this.router.navigate(["/home"])
    })
  }

}
