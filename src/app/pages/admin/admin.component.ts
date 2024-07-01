import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  usuarios: any[]=[]

  constructor(private apiService: AuthService){}

  ngOnInit(): void {
      this.getData();
  }

  getData(): void{

    this.apiService.getUsers().subscribe(
      (data: any[]) => {
        this.usuarios = data;
        // console.log(data)
      },
      error => {
        console.error('Error al obtener usuarios:', error);
      }
    );

  }

  onSubmit(form:NgForm,idUsuario: number){
    if (form.valid) {
      const userData = form.value; // Obtenemos los datos del formulario
      this.apiService.updateUserById(idUsuario.toString(), userData).subscribe(
        (response) => {
          console.log('Usuario actualizado con éxito:', response);

          alert('Datos guardados con exito')
          

        },
        (error) => {
          console.error('Error al actualizar usuario:', error);
          // Aquí podrías manejar el error de alguna manera, como mostrar un mensaje de error al usuario.
        }
      );
    } else {
      console.error('El formulario no es válido');
      // Aquí podrías manejar el caso en que el formulario no sea válido, por ejemplo, mostrando un mensaje de error al usuario.
    }
  }
  destroyUser(userId: string): void {
    this.apiService.destroyUserById(userId).subscribe(
      () => {
        console.log(`Cliente con ID ${userId} marcado como inactivo.`);
        // Aquí puedes realizar otras acciones después del borrado lógico
      },
      error => {
        console.error('Error al realizar el borrado lógico del cliente:', error);
        // Aquí puedes manejar el error, mostrar un mensaje de error, etc.
      }
    );
  }

}
