import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  validations_form!: FormGroup;
  genders?: Array<string>;

  // Mensajes de error personalizados
  validationMessages = {
    username: [
      { type: 'required', message: 'Username is required.' },
      { type: 'minlength', message: 'Username must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
      { type: 'pattern', message: 'Username must start with a letter and contain only letters or numbers.' },
      { type: 'validUsername', message: 'This username is not allowed.' },
    ],
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' },
    ],
    terms: [{ type: 'pattern', message: 'You must accept the terms and conditions.' }],
  };

  constructor(
    public formBuilder: FormBuilder,
    private navCtrl: NavController
  ) { }


  ngOnInit() {


    this.genders = [
      "Male",
      "Female"
    ];
    this.validations_form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^[a-zA-Z]{1}[a-zA-Z0-9]+$'),
        Validators.required,
        this.validUsername(),
      ])),
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+[@]{1}[a-zA-Z0-9-]+[.]{1}[a-zA-Z]+$')
      ])),
      gender: new FormControl(this.genders[0], Validators.required),
      terms: new FormControl(false, Validators.pattern('true'))
    });
  }

  validUsername(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value = control. value ? control.value.toLowerCase() : '';
      if (value === 'abc123' || value === 'cba321') {
        return { validUsername: true }; // Devuelve el error
      }
      return null; // Válido
    };
  }


  onSubmit(values: any) {
    console.log(values);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        user: JSON.stringify(values),
        numero: 3
      }
    };
    this.navCtrl.navigateForward('/details', navigationExtras);
  }
}//end_class
