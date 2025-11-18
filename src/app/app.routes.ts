import { Routes } from '@angular/router';
import { DoctorsPage } from './pages/doctors-page/doctors-page';

export const routes: Routes = [
  { path: '', component: DoctorsPage },
  { path: 'Doctor', component: DoctorsPage },
  { path: '**', redirectTo: '' },
];
