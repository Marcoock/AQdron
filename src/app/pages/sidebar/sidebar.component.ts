import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
declare var $: any;
declare function Active([]): any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  userId: any;
  user:any;

  constructor(private dataService : AuthService){}

  ngOnInit(): void {
    setTimeout(() => {
      Active($);
    }, 50);

    this.userId = localStorage.getItem('userId');

    this.dataService.getRol(this.userId).subscribe(
      (data: any) => {
        if (data.rol === 'Administrador') {
          this.user = true;
        }else{
          this.user = false;
        }
      },
      error => {
        console.error('Error al obtener usuario por ID:', error);
      }
    );
  }
}
