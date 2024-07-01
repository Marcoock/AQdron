import { Component } from '@angular/core';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css']
})
export class PredictionsComponent {

  seleccion: string = ''; // Variable para almacenar el valor seleccionado del radio button

  // Método para manejar la acción de envío del formulario
  onSubmit() {
    if (this.seleccion) {
      alert('Palabra: ' + this.seleccion); // Mostrar el mensaje con la palabra seleccionada
    } else {
      alert('Por favor, selecciona una opción'); // Mostrar un mensaje si no se selecciona ninguna opción
    }
  }

}
