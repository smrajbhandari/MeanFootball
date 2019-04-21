import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.myForm =  formBuilder.group({
      'email': [''],
      'password': ['']
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const user = this.myForm.value;
    console.log(user);

    if (this.myForm.valid) {
      return this.userService.login(user)
        .subscribe(data => {
          if (data) {
            localStorage.setItem('_token',data.toString());
            console.log('logged in');

          } else {
            console.log('wrong username or password');
          }
        });
    } else {
      console.log('Invalid form');
    }
  }
}
