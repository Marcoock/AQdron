import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RecordsComponent } from './pages/records/records.component';
import { PredictionsComponent } from './pages/predictions/predictions.component';
import { MapsComponent } from './pages/maps/maps.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RegisterComponent } from './pages/register/register.component';
import { SensorComponent } from './pages/sensor/sensor.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'admin',
    component:AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'records',
    component:RecordsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'predictions',
    component:PredictionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'maps',
    component:MapsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'sensor',
    component:SensorComponent,
    canActivate: [AuthGuard]

  },{
    path:'profile',
    component:ProfileComponent,
    canActivate: [AuthGuard]

  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
