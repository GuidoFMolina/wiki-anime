import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
        {path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)},
        {path: 'header', loadChildren: () => import('./pages/header/header.module').then(m => m.HeaderModule)},
        {path: 'body', loadChildren: () => import('./pages/body/body.module').then(m => m.BodyModule)},
        {path: 'footer', loadChildren: () => import('./pages/footer/footer.module').then(m => m.FooterModule)},
        {path: 'form-view', loadChildren: () => import('./pages/forms/form-view/form-view.module').then(m => m.FormViewModule)},
        {path: '', redirectTo: '/home', pathMatch: 'full'}
    ];
