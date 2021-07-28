import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logingroup: FormGroup;
  constructor(private router: Router, private authService: AuthService) {
    this.logingroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void { }


  loginProcess() {
    console.log('clicked')
    if (this.logingroup?.valid === true) {
      this.authService.login(this.logingroup?.value).subscribe(result => {
        if (result.token) {
          console.log(result)
          this.saveToken(result.token)
        } else {
          console.log('fail', result)
        }
        }
      )
    }
  }
   private saveToken(token: any) {
     localStorage.setItem('token', token)
  }
}


