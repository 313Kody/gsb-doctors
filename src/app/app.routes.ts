import { Routes } from '@angular/router';
import { DoctorsPageComponent } from './pages/doctors-page/doctors-page';

export const routes: Routes = [
  { path: '', component: DoctorsPageComponent },
  { path: 'Doctor', component: DoctorsPageComponent },
  { path: '**', redirectTo: '' },
];
