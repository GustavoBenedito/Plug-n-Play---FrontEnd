import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  selectedForm: string = 'login';

  chooseLoginSignup(choosed:string){
    this.selectedForm = choosed;
  }
}
