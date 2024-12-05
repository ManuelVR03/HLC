import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() {}

  // Método sin Observable
  submitFormData(data: any): { success: boolean; message: string } {
    console.log('Datos enviados:', data);
    return { success: true, message: 'Formulario enviado correctamente' };
  }
}
