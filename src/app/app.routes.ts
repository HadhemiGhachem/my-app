import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MapComponent } from './map/map.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';



export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'map', component: MapComponent},
    {path: 'statistiques', component: StatistiquesComponent },
    {path: 'employee-list' , component:EmployeeListComponent}


];

