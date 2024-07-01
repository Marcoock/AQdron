import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: any;
  user:any;

  constructor(private router: Router, private dataService: AuthService){
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');

    this.dataService.getUs(this.userId).subscribe(
      (data: any) => {
        // console.log(data);
        this.user=data;
      },
      error => {
        console.error('Error al obtener usuario por ID:', error);
      }
    );

  }
}
