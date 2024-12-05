import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  validations_form!: FormGroup;
  mayorDeEdad = false;

  validationMessages = {
    nombre: [
      { type: 'required', message: 'Nombre es requerido.' }
    ],
    apellido: [
      { type: 'required', message: 'Apellido es requerido.' }
    ],
    fecha: [
      { type: 'required', message: 'Fecha de nacimiento es requerida.' }
    ],
    dni: [
      { type: 'required', message: 'DNI es requerido para mayores de edad.' },
      { type: 'pattern', message: 'Formato de DNI incorrecto.' },
      { type: 'invalidDni', message: 'La letra del DNI no corresponde al número.' }
    ],
  };

  constructor(public formBuilder: FormBuilder, private navCtrl: NavController) {

    this.validations_form = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.compose([
        Validators.required,
        this.mayorDeEdadValidator()
      ])),
      dni: new FormControl('', Validators.compose([
        this.dniValidator(),
      ])),
    });
  }

  onSubmit(values: any){
    console.log(values);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        user: JSON.stringify(values)
      }
    };
    this.navCtrl.navigateForward('/user', navigationExtras);
  }

  mayorDeEdadValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (!value) return null;
      const date = new Date(value);
      const age = this.calculateAge(date);

      this.mayorDeEdad = age >= 18;
      if (this.mayorDeEdad) {
        this.validations_form.get('dni')?.setValidators([Validators.required, this.dniValidator()]);
        this.validations_form.get('dni')?.updateValueAndValidity();
        return null;
      } else {
        this.validations_form.get('dni')?.clearValidators();
        this.validations_form.get('dni')?.updateValueAndValidity();
        return null;
      }
    };
  }

  calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  dniValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (!value) return null;

      const dniPattern = /^[0-9]{8}[A-Z]{1}$/;
      if (!dniPattern.test(value)) {
        return { pattern: true };
      }

      const number = parseInt(value.slice(0, 8), 10);
      const letter = value.charAt(8);
      const validLetter = 'TRWAGMYFPDXBNJZSQVHLCKE'[number % 23];

      if (letter !== validLetter) {
        return { invalidDni: true };
      }

      return null;
    };
  }
}
