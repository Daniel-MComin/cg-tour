import { ExtraOptions, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlanningComponent } from './pages/planning/planning.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'planejar', component: PlanningComponent },
];
