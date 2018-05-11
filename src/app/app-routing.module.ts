import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule',
  },
  // {
  //   path: 'about',
  //   loadChildren: './pages/home/home.module#HomeModule',
  // },
  // {
  //   path: '**',
  //   loadChildren: './pages/home/home.module#HomeModule'
  // }

];

export const AppRoutingModule = RouterModule.forRoot( routes );
