import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-us-nav',
  templateUrl: './us-nav.component.html',
  styleUrls: ['./us-nav.component.css']
})
export class UsNavComponent implements OnInit {
  token: any;
  userId: any;
  user:any;

  constructor(private router: Router, private dataService: AuthService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');

    this.dataService.getRol(this.userId).subscribe(
      (data: any) => {
        this.user=data;
      },
      error => {
        console.error('Error al obtener usuario por ID:', error);
      }
    );



  }

  onClick() {
    this.token = localStorage.getItem('token');
    this.dataService.exit(this.token).subscribe(
      (response: any) => {

        localStorage.removeItem('token');
        localStorage.removeItem('userId')
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Error de sesión');
        console.log(error);
      }
    );
    localStorage.removeItem('token');
    localStorage.removeItem('userId')
    this.router.navigate(['/login']);
  }

}
