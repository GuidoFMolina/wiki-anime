import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
        {path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)},
        {path: 'header', loadChildren: () => import('./pages/header/header.module').then(m => m.HeaderModule)},
        {path: '', redirectTo: '/home', pathMatch: 'full'}
    ];
