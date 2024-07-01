import { Component, Input, OnInit } from '@angular/core';
import { AllowPatternsDirective } from 'src/app/directive/allow-patterns.directive';
declare var $: any;
declare function Active([]): any;
import { NgForm } from '@angular/forms';
import { AuthService, Usuario } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() patterns = AllowPatternsDirective;

  constructor(private dataService: AuthService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      Active($);
    }, 50);
  }
  onSubmit(form: NgForm) {
    // Obtener datos del formulario
    const formData = form.value;

    // Acceder a los datos uno por uno
    const correo = formData.correo;
    const password = formData.contrasenia;

    if (!correo || !password) {
      alert('Ups, parece que tienes datos sin llenar. Verifica los campos.');
      return;
    }

    const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailPattern.test(correo)) {
      alert("El correo electrónico no cumple con el formato adecuado");
      return;
    }

    this.dataService.create(formData).subscribe(
      (response: any) => {

        localStorage.setItem('token', response.token);

        this.dataService.setUserId(response.userId); // Guardar el ID del usuario

        this.router.navigate(['/dashboard']);
        // console.log(response);

        alert('Bienvenido. Acceso correcto');
        // Navegar después de guardar los datos
      },
      (error) => {
        alert('Credenciales no validas');
        console.log(error);
      }
    );
  }
}
