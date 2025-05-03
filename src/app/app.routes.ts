import { Routes } from '@angular/router';
import { noop } from 'rxjs';

import { Punto4Component } from '../componentes/punto4/punto4.component';
import { NavbarComponent } from '../componentes/navbar/navbar.component';

export const routes: Routes = [{



    path: 'SistemaPasajes',
    component: Punto4Component
},
{
    path: '**',
    redirectTo: 'SistemaPasajes',
},{
    path: 'navbar',
    component: NavbarComponent
}

];
