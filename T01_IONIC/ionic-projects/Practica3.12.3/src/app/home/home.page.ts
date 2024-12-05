import { Component } from '@angular/core';
import {
  AbstractControl, FormBuilder, FormControl, FormGroup,
  ValidatorFn, Validators
} from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  validations_form!: FormGroup;
  genders?: Array<string>;
  mayorEdad = false;

  // Mensajes de error personalizados
  validationMessages = {
    nombre: [
      { type: 'required', message: 'Nombre es requerido.' }
    ],
    apellido: [
      { type: 'required', message: 'Apellido es requerido.' }
    ],
    fecha: [
      { type: 'required', message: 'Date is required.' },
      { type: 'pattern', message: 'Enter a valid date.' },
      {
        type: 'validDate', message: 'Date cannot be greater than the current date or less than 1900'
      },
    ],
    dni: [
      { type: 'required', message: 'DNI is required.' },
      { type: 'pattern', message: 'Enter a valid DNI.' },
      { type: 'validDNI', message: 'DNI is not valid' },
    ]
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
      nombre: new FormControl('', Validators.required),

      apellido: new FormControl('', Validators.required),

      fecha: new FormControl('', Validators.compose([
        Validators.required,
        this.validDate(),
      ])),

      dni: new FormControl('', Validators.compose([
        Validators.minLength(9),
        Validators.pattern('^[0-9]{8,8}[A-Za-z]$'),
        this.validDNI()
      ]))
    });

    this.validations_form.get('fecha')?.valueChanges.subscribe(() => {
      this.updateDNIValidators();
    });
  }

  updateDNIValidators() {
    const dniControl = this.validations_form.get('dni');
    if (this.mayorEdad) {
      dniControl?.setValidators([
        Validators.required,
        Validators.minLength(9),
        Validators.pattern('^[0-9]{8,8}[A-Za-z]$'),
        this.validDNI()
      ]);
    } else {
      dniControl?.clearValidators();
    }
    dniControl?.updateValueAndValidity();
  }

  validDate(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value = control.value ? control.value : '';
      const date = new Date(value);
      const now = new Date();
      this.mayorEdad = date.getFullYear() <= now.getFullYear() - 18;
      if (date > now) {
        return { validDate: true }; // Devuelve el error
      } else if (date.getFullYear() < 1950) {
        return { validDate: true }; // Devuelve el error
      }
      return null; // Válido
    };
  }

  validDNI(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value = control.value ? control.value : '';
      const dni = value.substring(0, value.length - 1);
      const letter = value.substring(value.length - 1);
      const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
      if (letter.toUpperCase() !== letters.charAt(parseInt(dni) % 23)) {
        return { validDNI: true }; // Devuelve el error
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
    this.navCtrl.navigateForward('/user', navigationExtras);
  }
}