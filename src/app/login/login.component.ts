import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import 
{ 
  AbstractControl, 
  FormBuilder, 
  FormGroup, 
  FormControl,
  
  ReactiveFormsModule,
  Validators

} from '@angular/forms';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
<<<<<<< HEAD
export class LoginComponent {
  
=======


export class LoginComponent 
{
  loginForm: FormGroup = new FormGroup(
    {
    username: new FormGroup(''),
    password: new FormGroup(''),
    });

  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() : void
  {
    this.loginForm = this.formBuilder.group(
      {
        username: ['' , Validators.required ],
      password: ['' , [Validators.required , Validators.minLength(6),]],
      }
    );
  }


  get f(): { [Key: string] : AbstractControl} 
  {
    return this.loginForm.controls;
  }

  onSubmit(): void 
  {
    this.submitted= true;

    if (this.loginForm.invalid) {
      return;
    }

    alert(JSON.stringify(this.loginForm.value, null, 2));
  }
  

  

>>>>>>> 2539c1998424edc6c178a3f2a79a93e3e35f6a45
}
