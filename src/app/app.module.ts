import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MapsComponent } from './pages/maps/maps.component';
import { PredictionsComponent } from './pages/predictions/predictions.component';
import { RecordsComponent } from './pages/records/records.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RegisterComponent } from './pages/register/register.component';
import { AllowPatternsDirective } from './directive/allow-patterns.directive';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SensorComponent } from './pages/sensor/sensor.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsNavComponent } from './pages/us-nav/us-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    DashboardComponent,
    MapsComponent,
    PredictionsComponent,
    RecordsComponent,
    AdminComponent,
    RegisterComponent,
    AllowPatternsDirective,
    SensorComponent,
    ProfileComponent,
    UsNavComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
