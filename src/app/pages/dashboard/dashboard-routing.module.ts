import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('src/app/pages/home/home-routing.module')
          .then(mod => mod.HomeRoutingModule)
      },
      {
        path: 'noticias/:slug',
        loadChildren: () => import('src/app/pages/new/new-routing.module')
          .then(mod => mod.NewRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
