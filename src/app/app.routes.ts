import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'configPage',
    loadComponent: () =>
      import('./features/configurations/pages/config/config.component').then(
        (m) => m.ConfigComponent,
      ),
  },
  {
    path: 'tasksPage',
    loadComponent: () =>
      import('./features/tasks/pages/tasks-page/tasks-page.component').then(
        (m) => m.TasksPageComponent,
      ),
  },
];
